import asyncHandler from "express-async-handler";
import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";
import handlebars from "handlebars";

import { report } from "./sampleReport.js";

const splitIntoGroups = (datasets, groupSize) => {
  const result = [];
  for (let i = 0; i < datasets.length; i += groupSize) {
    result.push(datasets.slice(i, i + groupSize));
  }
  return result;
};

// @desc    Generate PDF
// @route   GET /api/generate-pdf
// @access  Admin
const generatePDF = asyncHandler(async (req, res) => {
  try {
    console.log("Started printing");
    console.time("Execution Time");

    const browser = await puppeteer.launch({
      headless: "new",
    });

    const page = await browser.newPage();

    page.setDefaultNavigationTimeout(600000); // 10 minutes

    const __dirname = path.resolve();

    const css = fs.readFileSync(
      path.join(__dirname, "./public/styles/tailwind.css"),
      "utf8"
    );

    const source = await fs.readFileSync(
      path.join(__dirname, "./templates/report-tailwind.handlebars"),
      "utf-8"
    );

    const template = handlebars.compile(source);

    const imagesPath = `http://localhost:3002/images`;
    const cssPath = `http://localhost:3002/styles/tailwind.css`;

    const hasDatasets = report.datasets && report.datasets.length > 0;

    let groupedDatasets = [];

    if (hasDatasets) {
      groupedDatasets = splitIntoGroups(report.datasets, 3);
    }

    const data = {
      imagesPath: imagesPath,
      cssPath: cssPath,
      report: report,
      created: new Date(report.createdAt.$date)
        .toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
        .replace(/,/g, ""),
      hasDatasets: hasDatasets,
      groupedDatasets: groupedDatasets,
    };

    handlebars.registerHelper("array", function (...args) {
      // Remove the options object from the arguments list
      args.pop();
      return args;
    });

    handlebars.registerHelper("subtract", function (a, b) {
      return a - b;
    });

    handlebars.registerHelper("length", function (arr) {
      return arr.length;
    });

    handlebars.registerHelper(
      "calculateBackgroundColor",
      (index, riskLevel) => {
        let background = "bg-gray-400";

        if (riskLevel === "Low Risk" && index === 0) {
          background = "bg-green-500";
        } else if (riskLevel === "Moderate Low" && index <= 1) {
          background = "bg-yellow-400";
        } else if (riskLevel === "Moderate" && index <= 2) {
          background = "bg-yellow-600";
        } else if (riskLevel === "Moderate High" && index <= 3) {
          background = "bg-red-500";
        } else if (riskLevel === "High Risk" && index <= 4) {
          background = "bg-red-700";
        }

        return background;
      }
    );

    handlebars.registerHelper("getBarColor", function (index, riskLevel) {
      console.log("index:", index);
      console.log("riskLevel:", riskLevel);
      let color;
      if (index <= riskLevel) {
        switch (riskLevel) {
          case 0:
            color = "bg-green-500";
            break;
          case 1:
            color = "bg-yellow-400";
            break;
          case 2:
            color = "bg-yellow-600";
            break;
          case 3:
            color = "bg-red-500";
            break;
          case 4:
            color = "bg-red-700";
            break;
          default:
            color = "bg-gray-400";
        }
      } else {
        color = "bg-gray-400";
      }
      console.log(color);
      return color;
    });

    handlebars.registerHelper("add", function (a, b) {
      return a + b;
    });

    handlebars.registerHelper("mod", function (a, b) {
      return a % b;
    });

    handlebars.registerHelper("eq", function (a, b) {
      return a === b;
    });

    handlebars.registerHelper("ne", function (a, b) {
      return a !== b;
    });

    handlebars.registerHelper("and", function (a, b) {
      return a && b;
    });

    let html = template(data);

    html = html.replace("</head>", `<style>${css}</style></head>`);

    await page.setContent(html, {
      waitUntil: "domcontentloaded",
      waitUntil: "networkidle0",
    });

    // Wait for all images to load
    // await page.waitForSelector('img[src^="http://localhost:3002/images"]', {
    //   visible: true,
    // });

    // set viewport for the page
    await page.setViewport({ width: 1280, height: 800 });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    await browser.close();

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${report._id.$oid}.pdf"`,
    });

    res.send(pdfBuffer);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Printing Ended");
    console.timeEnd("Execution Time");
  }
});

export { generatePDF };
