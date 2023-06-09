import asyncHandler from "express-async-handler";
import fs from "fs";
import path from "path";
import pdf from "pdf-creator-node";
import puppeteer from "puppeteer";
import handlebars from "handlebars";
import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);

import { report } from "./sampleReport.js";

// @desc    Generate PDF
// @route   GET /api/generate-pdf
// @access  Admin
const generatePDFUsingPDFCreatorNode = asyncHandler(async (req, res) => {
  try {
    const __dirname = path.resolve();

    const css = fs.readFileSync(
      path.join(__dirname, "./public/styles/style.css"),
      "utf8"
    );

    let html = fs.readFileSync(
      path.join(__dirname, "./templates/report.html"),
      "utf-8"
    );

    const options = {
      format: "A4",
      orientation: "portrait",
      pageFormats: {
        // A4: {
        //   width: "210mm",
        //   height: "297mm",
        // },
      },
    };

    const users = [
      {
        name: "Shyam",
        age: "26",
      },
      {
        name: "Navjot",
        age: "26",
      },
      {
        name: "Vitthal",
        age: "26",
      },
      {
        name: "John",
        age: "30",
      },
      {
        name: "Jane",
        age: "28",
      },
      {
        name: "Bob",
        age: "32",
      },
      {
        name: "Alice",
        age: "25",
      },
      {
        name: "Charlie",
        age: "27",
      },
      {
        name: "Eve",
        age: "29",
      },
    ];

    const usersGrouped = [];

    for (let i = 0; i < users.length; i += 3) {
      usersGrouped.push(users.slice(i, i + 3));
    }

    //get the application roo url from .env
    const appUrl = process.env.APP_URL || "http://localhost:3002";

    const stylesPath = `${appUrl}/styles/style.css`;
    const imagesPath = `${appUrl}/images`;

    // html = html.replace(
    //   "<style></style>",
    //   `<link rel='stylesheet' href='${appUrl}/styles/style.css'>`
    // );
    // html = html.replace(
    //   "<boxicons></boxicons>",
    //   "<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>"
    // );

    const document = {
      html: html,
      data: {
        users,
        stylesPath,
        imagesPath,
      },
      path: "./pdf-test.pdf",
      type: "buffer",
    };

    const pdfBuffer = await pdf.create(document, options);

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="pdf-test.pdf"',
    });
    res.send(pdfBuffer);
  } catch (err) {
    res.status(500);
    console.log(err);
    throw new Error("Internal server error");
  }
});

const generatePDFUsingPuppeteer = asyncHandler(async (req, res) => {
  try {
    const browser = await puppeteer.launch({
      headless: "new",
    });

    // create a new page
    const page = await browser.newPage();

    const __dirname = path.resolve();

    let html = fs.readFileSync(
      path.join(__dirname, "./templates/report.html"),
      "utf-8"
    );

    const css = fs.readFileSync(
      path.join(__dirname, "./public/styles/style.css"),
      "utf8"
    );

    const imagesPath = `http://localhost:3002/images`;

    console.log(imagesPath);

    html = html.replace(/{{imagesPath}}/g, imagesPath);

    html = html.replace("</head>", `<style>${css}</style></head>`);

    // set your html as the pages content
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

    // create a pdf buffer
    const pdfBuffer = await page.pdf({
      format: "A4",
    });

    // or a .pdf file
    await page.pdf({
      format: "A4",
      path: `${__dirname}/my-fance-invoice.pdf`,
    });

    // close the browser
    await browser.close();

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="my-fance-invoice.pdf"',
    });
    res.send(pdfBuffer);
  } catch (err) {
    res.status(500);
    console.log(err);
    throw new Error("Internal server error");
  }
});

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
      path.join(__dirname, "./public/styles/style.css"),
      "utf8"
    );

    const source = await fs.readFileSync(
      path.join(__dirname, "./templates/report-tailwind.handlebars"),
      "utf-8"
    );

    const template = handlebars.compile(source);

    const imagesPath = `http://localhost:3002/images`;
    const cssPath = `http://localhost:3002/styles/main.css`;

    const timeAgo = new TimeAgo("en-US");

    const data = {
      imagesPath: imagesPath,
      cssPath: cssPath,
      report: report,
      created: {
        date: new Date(report.createdAt.$date)
          .toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })
          .replace(/,/g, ""),
        ago: timeAgo.format(new Date(report.createdAt.$date)),
      },
    };

    handlebars.registerHelper("array", function (...args) {
      // Remove the options object from the arguments list
      args.pop();
      return args;
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
