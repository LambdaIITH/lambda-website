---
title: "Fixing CORS Errors in Google Apps Script"
github: ["https://github.com/muqeeth26832"]
summary: "A Practical Guide to Understanding and Resolving Cross-Origin Resource Sharing Issues"
date: "2025-04-06"
draft: false
tags:
- Google Apps Script
- CORS
- Web Development
- API
---

<img src="/assets/blogs/CORS/cors-error-meme.webp" alt="CORS Error Meme" width="400">

Have you ever built a web application that needs to communicate with Google services, only to be greeted by cryptic CORS errors in your browser console? You're not alone! In this guide, I'll walk you through what Google Apps Script is, explain the CORS issue that commonly affects web developers, and show you a bulletproof solution to fix it once and for all.

## What is Google Apps Script?

Google Apps Script is a powerful cloud-based JavaScript platform created by Google that seamlessly integrates with Google Workspace (formerly G Suite) products. It allows developers to automate tasks, create custom functions, and extend the functionality of Google applications such as Docs, Sheets, Forms, and more.

### Key Features of Google Apps Script:

- **Server-side JavaScript**: Run code on Google's servers without managing your own infrastructure
- **Built-in Integration**: Native access to Google services (Gmail, Drive, Calendar, etc.)
- **Web App Publishing**: Create and deploy web applications with simple URLs
- **Time-driven Triggers**: Schedule scripts to run automatically at specific intervals
- **Custom Functions**: Extend Google Sheets with your own formulas
- **Form Processing**: Create advanced form handling and data processing workflows

Google Apps Script is particularly valuable for creating custom solutions within the Google ecosystem, whether you're building simple automation scripts or complex web applications. You can build everything from automated email responders to full-fledged web applications that integrate with Google services.

## Understanding CORS: The Cross-Origin Roadblock

<img src="/assets/blogs/CORS/cors-block-meme.jpg" alt="CORS Blocked Meme" width="400">

### What is CORS?

CORS (Cross-Origin Resource Sharing) is a security mechanism built into web browsers that restricts web pages from making requests to a domain different from the one that served the original page. In simple terms, it's a security feature that prevents potentially malicious websites from accessing data across different domains without proper authorization.

When your browser makes a request to a different domain (or origin), the browser first checks if that domain allows requests from your current website. If not, the browser blocks the request and shows a CORS error in the console.

### Why CORS Errors Occur with Apps Script

CORS errors typically happen when:

1. Your web application is hosted on one domain (e.g., `yourwebsite.com`)
2. Your Apps Script web app is on another domain (e.g., `script.google.com`)
3. Your web application tries to send requests to the Apps Script

Without proper CORS headers, these cross-domain requests will be blocked by the browser, resulting in errors like:

```
Access to fetch at 'https://script.google.com/macros/s/your-script-id/exec' from origin 'https://yourwebsite.com' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

## How to Fix CORS Errors in Google Apps Script

The solution to CORS issues involves configuring your Apps Script to explicitly allow requests from other domains by setting the appropriate HTTP headers in your response. Let's look at how to implement this correctly:

### The Essential CORS Headers

To enable cross-origin requests, your Apps Script needs to include these headers in its responses:

1. **Access-Control-Allow-Origin**: Specifies which origins can access the resource
2. **Access-Control-Allow-Methods**: Lists the HTTP methods allowed (GET, POST, etc.)
3. **Access-Control-Allow-Headers**: Indicates which HTTP headers can be used in the request

### Handling Preflight Requests

Modern browsers send a "preflight" OPTIONS request before certain cross-origin requests to check if the CORS protocol is understood. Your Apps Script must respond appropriately to these requests by implementing a `doOptions()` function.

## Working Contact Form Implementation with CORS Handling

Here's a complete implementation of a contact form handler in Google Apps Script that properly handles CORS:

```javascript
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

    const sheet = SpreadsheetApp.openById("SHEET_ID").getSheetByName("contacts");
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
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders(headers);
}

function doGet() {
  return ContentService.createTextOutput("success")
}
```

## Breaking Down the CORS Solution

Let's analyze how this code successfully handles CORS issues:

### 1. Handling POST Requests with CORS Headers

The `doPost()` function processes incoming form submissions and includes the necessary CORS headers:

```javascript
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};
```

Setting `"Access-Control-Allow-Origin": "*"` allows requests from any domain. For production environments, you might want to restrict this to specific domains for better security.

### 2. Handling Preflight OPTIONS Requests

The `doOptions()` function is crucial for CORS compliance. Modern browsers automatically send an OPTIONS request before certain cross-origin requests (especially those with custom headers or using methods like POST):

```javascript
function doOptions() {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    });
}
```

This function responds to the browser's preflight check with appropriate CORS headers, indicating that cross-origin requests are allowed.

### 3. Consistent CORS Response Helper

The `createCorsResponse()` function ensures that all responses (success or error) include the necessary CORS headers:

```javascript
function createCorsResponse(success, message, headers) {
  return ContentService.createTextOutput(JSON.stringify({
    status: success ? "success" : "error",
    message
  }))
  .setMimeType(ContentService.MimeType.JSON)
  .setHeaders(headers);
}
```

This function:
1. Creates a JSON response with appropriate status and message
2. Sets the proper MIME type
3. Adds all the CORS headers to enable cross-origin access

## How This Contact Form Works

Now that we understand the CORS aspects, let's look at the overall functionality:

1. The script receives form data via POST request with fields for name, email, and message
2. It validates the data, ensuring all required fields are present and the email format is valid
3. The submission is recorded in a Google Sheet for record-keeping
4. An email notification is sent with the form details formatted in HTML
5. A success response is returned to the frontend with proper CORS headers

## Deploying Your CORS-Enabled Apps Script

To use this script:

1. Create a new Google Apps Script project
2. Copy and paste this code
3. Deploy as a web app:
   - Click on "Deploy" > "New deployment"
   - Select "Web app" as the deployment type
   - Set "Execute as" to your account
   - Set "Who has access" to "Anyone" (for public forms) or "Anyone with Google Account" (for restricted access)
4. Copy the web app URL from the deployment

## Calling Your Apps Script from Your Website

Here's how you can call this Apps Script from your website using JavaScript fetch:

```javascript
async function submitContactForm(formData) {
  try {
    const response = await fetch('https://script.google.com/macros/s/YOUR-SCRIPT-ID/exec', {
      method: 'POST',
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message
      })
    });

    const result = await response.json();
    if (result.status === 'success') {
      alert('Message sent successfully!');
    } else {
      alert('Error: ' + result.message);
    }
  } catch (error) {
    alert('Failed to submit form: ' + error.message);
  }
}
```

## Common Pitfalls and Solutions

### 1. Not Handling OPTIONS Requests

If you forget to implement `doOptions()`, the browser's preflight requests will fail, and you'll still see CORS errors even with headers in your main functions.

### 2. Forgetting to Apply Headers

Make sure your `setHeaders()` call is applied to the ContentService response object before returning it.

### 3. Restrictive Header Values

Be careful with very restrictive CORS headers. During development, using `"*"` for `Access-Control-Allow-Origin` makes debugging easier, but in production, you might want to specify allowed domains.

### 4. Deployment Settings

Ensure your Apps Script deployment permissions are set correctly. If access is too restrictive, no amount of CORS headers will help.

## Security Considerations

While our example uses `"*"` to allow requests from any origin, in a production environment you might want to restrict this to specific domains:

```javascript
const headers = {
  "Access-Control-Allow-Origin": "https://your-specific-domain.com",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};
```

This improves security by ensuring only your legitimate websites can access your Apps Script.

## Conclusion

Understanding and properly handling CORS is essential when building web applications that interact with Google Apps Script. By implementing the solution provided in this blog, you can create seamless integrations between your website and Google services without running into frustrating CORS errors.

The key takeaways:

1. Always include proper CORS headers in your Apps Script responses
2. Implement a `doOptions()` function to handle preflight requests
3. Use a consistent helper function to ensure all responses include CORS headers
4. Consider security implications and restrict origin access in production

With these principles in mind, you can build powerful web applications that leverage the full potential of Google Apps Script without getting blocked by CORS restrictions.

## Bonus: CORS Troubleshooting Checklist

| Issue | Solution |
| --------------------- | -------------------------------------------------- |
| "No 'Access-Control-Allow-Origin' header" error | Implement CORS headers in all responses |
| Preflight request failing | Add `doOptions()` function |
| Request works in Postman but not browser | Browsers enforce CORS, tools like Postman don't |
| Headers exist but still getting errors | Check that headers are actually being applied with `setHeaders()` |
| Working in development but not production | Check for domain mismatches in your CORS configuration |
