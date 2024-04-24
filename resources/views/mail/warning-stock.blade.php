<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Stock Warning</title>
    <style>
      /* Add your custom styles here */
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
      }
      .content {
        padding: 20px;
        background-color: #f8f8f8;
        border-radius: 5px;
      }
      .warning {
        color: #ff5733;
        font-weight: bold;
      }
      .footer {
        margin-top: 20px;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="content">
        <h2>Stock Warning</h2>
        <p class="warning">Attention Admins,</p>
        <p>
          This is to inform you that our product {{ $product->name }} 
          are running low and our current stock is {{ $stock }}. 
          Please review the inventory and take necessary actions to
          replenish the stock to avoid any disruptions in supply.
        </p>
        <p>We appreciate your prompt attention to this matter.</p>
        <p class="warning">Thank you.</p>
      </div>
      <div class="footer">
        <p>&copy; 2024 Smart Invent. All rights reserved.</p>
      </div>
    </div>
  </body>
</html>
