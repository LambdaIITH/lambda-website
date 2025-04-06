function doPost(e) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  try {
    if (!e || !e.postData || !e.postData.contents) {
      return createCorsResponse(false, "No post data found", headers);
    }

    const data = JSON.parse(e.postData.contents);
    const name = data.name;
    const email = data.email;
    const message = data.message;

    if (!name || !email || !message || !validateEmail(email)) {
      return createCorsResponse(false, "Invalid data provided", headers);
    }

    const sheet = SpreadsheetApp.openById("1lKdzVkWmVL5KcMTRq1Zy0fSBsdEK68zmRlZjRtWeqNQ").getSheetByName("contacts");
    if (!sheet) return createCorsResponse(false, "Sheet not found", headers);

    sheet.appendRow([new Date(), name, email, message]);

    const recipient = "lambda@iith.ac.in";
    const subject = "📩 New Contact Form Submission";
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; padding: 10px;">
        <h2 style="color: #4CAF50;">New Contact Form Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Message:</strong></p>
        <div style="padding: 10px; background-color: #f4f4f4; border-left: 4px solid #4CAF50;">
          ${message.replace(/\n/g, "<br>")}
        </div>
        <p style="margin-top: 20px; font-size: 12px; color: #888;">Received on ${new Date().toLocaleString()}</p>
      </div>
    `;
    const plainBody = `New message received:\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`;

    MailApp.sendEmail({
      to: recipient,
      subject,
      htmlBody,
      body: plainBody
    });

    return createCorsResponse(true, "Message received!", headers);
  } catch (error) {
    return createCorsResponse(false, "Server error: " + error.message, headers);
  }
}

// CORS preflight handler
function doOptions() {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    });
}

// Email validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Generic CORS JSON response
function createCorsResponse(success, message, headers) {
  return ContentService.createTextOutput(JSON.stringify({ status: success ? "success" : "error", message }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService.createTextOutput("success")
}
