import asyncHandler from "express-async-handler";
import fs from "fs";
import path from "path";
import pdf from "pdf-creator-node";

// @desc    Generate PDF
// @route   GET /api/generate-pdf
// @access  Admin
const generatePDF = asyncHandler(async (req, res) => {
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
      // border: "10mm",
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

export { generatePDF };
