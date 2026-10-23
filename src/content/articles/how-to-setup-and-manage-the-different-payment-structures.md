---
title: "How to Setup and Manage the Different Payment Structures"
summary: "BAFTA Events offers two primary payment workflows, referred to in the system as Cash Basis and Invoice Basis."
category: payment-and-invoicing
order: 100
date: 2024-09-25
updated: 2026-10-01
status: published
wordpress_id: 1301
---

BAFTA Events offers two primary payment workflows, referred to in the system as Cash Basis and Invoice Basis. These workflows are designed to assist Admins in organising Events, ensuring effective and prompt payment collection, and providing bookers with simple and clear payment processes. Since these payment settings are integrated into core functionalities, such as instances or Branches, it’s crucial for Admins to carefully consider their preferred workflow when setting up the system.

It is important that these processes are not altered mid-way through any Booking process, as doing so could disrupt payment workflows. Careful planning is essential to determine how Tickets should be paid for before the purchasing process is opened. This guide will explain the different payment workflows, what can be achieved with each, and how to set up the entire process. The system also offers a range of sophisticated and granular functions to support each workflow, many of which are optional. These optional features will be clearly identified throughout the guide.

### Payment Workflow Definitions

**Cash Basis Payment Workflow** - Payment is collected immediately when a transaction occurs, requiring Bookers to pay for their tickets at the time of booking. The transaction is recorded when the payment is received, making it straightforward and typically used for immediate payment scenarios. In the context of BAFTA Events, "cash" does not refer to physical money but instead to card payments processed via Stripe. This workflow is typically used for Events where ticket prices are low, such as cinema screenings, concerts, workshops, or small-scale community events.

**Invoice Basis Payment Workflow** - Payment is not required at the time of booking. Instead, an Invoice is generated and sent to the Booker, detailing the amount owed. The Booker is then expected to pay according to the terms specified on the Invoice (e.g., within 30 days). This workflow allows for more flexibility, especially in scenarios where payment might need to be processed through corporate accounts or requires approval before being completed. This is typically used for high-value sales such as award ceremonies, corporate conferences, sponsorship packages, or gala dinners.

**Note** \- An Event in terms of the product can only use one workflow, but it is possible to create multiple workflows for the same Event. Please create a support ticket for guidance on setting up for more complex Events.

### User-Level Settings and Overrides

In addition to the primary payment workflows, BAFTA Events provides certain user-level settings that can influence payment processes. One such setting is **Invoice Credit Approved**.

### Invoice Credit Approved

This setting determines whether a user is authorised to have credit extended for invoice payments.

-   **Default Behaviour**: By default, all users are set to **Invoice Credit Approved = No**, unless an administrator changes this setting.
-   **When Enforcement is Active**: If enforcement is active, this field acts as a true override. This means that even if other conditions would typically allow credit, the user's status will prevent it.
-   **When Enforcement is Not Active**: If enforcement is not active, the field has no functional effect but remains visible for clarity.

This setting is particularly useful for managing credit approvals on an individual basis, ensuring that only authorised users can have credit extended to them.

### How to Set-Up the Invoice/Receipt/Credit Notes Documents

Before Admins set up any of the payment workflows, the first step is to configure the necessary PDF templates for Invoices, Receipts, and Credit Notes. Without these templates, the payment workflows will not function properly. When your instance is delivered, BMT will generate these templates for the default branches. However, if you wish to create a new Branch or modify the default templates, these instructions must be followed. If you are setting up payment for the default Branch, this section can be skipped, though it is important to have an understanding of the process.

BAFTA Events allows each Branch to have its own unique set of templates. Upon initial setup, BMT supplies default templates, but Admins may wish to alter the design. Although the process may seem complex at first, it essentially requires Admins to provide a clean PDF file with the appropriate logos, design, and static elements, such as "Address:", "PO Number:", or "Date:". The system then maps Special Values to the corresponding places on the template, enabling custom templates to be created by Admins who define the design and content.

BMT can provide a consultancy service to assist with mapping data to templates, but please note that BMT does not offer design services beyond adding a logo to the document. If you require assistance, please create a support ticket, and we can advise on the level of help that can be provided and any associated costs.

**Note** - All numeric values in the instructions below should be provided in PX

To replace, edit or create new templates follow these instructions:

1.  Log into the **Admin Interface**
2.  Go to **Control Centre>Branches**
3.  Locate the Branch and select **Edit** in the **Actions Menu**
4.  Scroll to the bottom of the page and locate **Invoice** and **Receipt Template** section
5.  Decide if you want to edit the **Invoice**, **Receipt** or **Credit Note** - the same functionality is provided for all three options
6.  Click on the **Upload** button to provide a new template, if there is an existing template you will see this listed
7.  Select the **Font**, **Size** and **Colour** which will be used for the mapped fields
8.  The next section comprises a range of values that can be mapped to the Invoice if required by the admins.
    1.  **Positioning (X and Y Values):**
        -   Each mapping element on the invoice is associated with an X value and a Y value.
            -   The X coordinate will set the top left of the values horizontal position in the document
            -   The Y coordinate will set the top left of the values vertical position in the document
        -   These values determine the exact position where the element will be placed on the first page of the invoice PDF.
    2.  **Width Specification:**
        -   The width defines the point at which the text will wrap to the next line.
        -   It is recommended to set the width to accommodate the longest possible value to avoid any text overflow or truncation issues.
    3.  **Multi-line Mappings:**
        -   For mappings that may span multiple lines (e.g., an address), a spacing value is used.
        -   This spacing value controls the distance between each line of text, ensuring consistent formatting and readability.
    4.  **Mapped Values:**
        -   **Invoice Number:** Maps the unique invoice number automatically issued by the system.
        -   **Booker Name:** Maps the first name and last name of the account owner.
        -   **Booker Email:** Maps the main email address of the account owner.
        -   **Booker Company Name:** Maps the company name set on the account.
        -   **Booker Billing Address:** Maps the billing address set on the account.
        -   **Booker Phone:** Maps the phone number set on the account.
        -   **Booker Mobile:** Maps the mobile number set on the account.
        -   **Invoice Date:** Maps the date the invoice was generated.
        -   **PO Number:** Maps the PO number if provided; note that bookers can only provide this once the invoice has been generated.
9.  The first and second page define where the Invoice list items will appear on both the document first page and subsequent pages. There are two options as it is assumed that the line items will start lower on the first page due to the address details, logo etc. These will not be included on subsequent pages meaning the line items can appear higher on the page.
    1.  The **Start X**, **Start Y** and **End Y** define where the table will begin and end on each page
    2.  **Item Width**, **Quantity Width**, **Unit Cost Width** and **Item Total Width** are the 4 columns that need to be mapped to the document. All four should be mapped so that the table does not break.
    3.  The Invoice Footer will only appear on the last page of the document. The Start X and Start Y should be plotted below the bottom of the table height on both the first and second page
    4.  Make sure to include all copy such as Company address and VAT number that is legally required in the **Invoice Footer** test area making sure to adjust the hight so that all the required infromation appers on the page
10.  There is a Preview function that can be used at any stage so you can review your progress. Make sure that you click **Save** before you click Preview to review your updates.
11.  When finished click **Save**.

**Note** \- It is likely that compiling the document will take some time but the UI does give admins the freedom to curate a custom document. It is advised to make one change at a time, review and then continue editing.

**Note** - Invoices are not generated for Cash Basis workflows but it is advised to create the document to ensure all the functionality triggers as expected

### How to Set Up the Cash Basis Payment Workflow

As detailed above Admins should use this workflow when they want the payment to be collected at the point of Booking. No Tickets will be issued nor Bookings confirmed unless the payment has been completed. Despite using the term cash all payments must be made online using a Credit or Debit Card. The payments will be processed using your Stripe account. At no point will the system allow customers to pay using cash. This is best used where each ticket has a low cost and there is no requirement for Admins to verify Bookers who are applying for Tickets. Once the Cash Basis workflow is set-up then there is little interaction required for Admin users other than processing refunds.

To enable the cash workflow:

1.  Log into the **Admin Interface**
2.  Go to **Control Centre>Branches**
3.  Select the relevant Branch and click **Edit**
4.  Scroll down to the **Invoice and Payment** section
5.  Select **Yes** for **Invoicing and Payment**
6.  Select the **Branch currency**
7.  Select **Cash Basis** for **Payment Mechanism**
8.  If Gift Aid is required select **Yes** for **Allow donation tickets (Gift Aid**) - for more information please see the relevant guide.
9.  Provide an **Invoice Prefix** number. As each Invoice is generated the system will add a 5 digit number which will increase by 1 increment for each Invoice generated. The Prefix if the number/detail that appears before the number, for example **LIVEEVENTS2024/00001**
    1.  Invoice prefix numbers can also be applied at an Event-level. On the Event settings page provide a value for the **Invoice Prefix** and this will apply for any Invoices for the Event, ignoring the Default set for the Branch. The Event specific Invoice numbers will begin at **/00001** for each event.
10.  Set the option **Ticket price includes VAT by default**. This option will automatically include VAT in the Ticket price and include this on the Invoices. Most Events will be VAT applicable and if you are setting this to **No** then ensure that you have the correct information.
    1.  **Yes** \- the Tickets are subject to VAT and there will be a VAT line item on the Invoice. When setting prices set them without including the VAT
        1.  Provide the **VAT Acronym** and **VAT Amount (%)**
    2.  **No** \- the Tickets are not subject to VAT and there will be no reference to VAT during the payment process
11.  Decide if Receipts and Credit Notes should be included in the Booking Confirmed Emails. Currently Receipts will be sent for all transactions including those of £0.00
12.  Click **Save**

**Note** - setting prices for individual Ticket Types is actioned as part of the Event setup.

### How Manage Email Templates for Invoices, Receipts and Credit Notes for Cash Basis Transactions

There are no additional Emails required to be set up for Cash Basis transactions. Admins should consider that Finance documentation will be attached to the following Email Templates so Admins should consider referencing this in the email content. For more information about managing and setting up Email Templates read the [**Email Template Guide**](/help-articles/how-to-set-up-branch-email-templates/)**.**

Invoices are not generated for Cash Basis. If the Branch is set up to send Receipts, then these will be attached to one of the four following templates sent to the User to confirm their Booking.

-   **booking/confirm\_ticketed**
-   **booking/confirm\_ticketed\_namesMissing**
-   **booking/confirm\_unticketed**
-   **booking/confirm\_unticketed\_namesMissing**

At the checkout Bookers have the option to send a Receipt to a specified Email. This option will only appear if the Branch is set to send VAT Receipts. If the Booker provides an email address then the **payment/receipt** email will be sent.

If Tickets or Bookings are cancelled then one of the following Email Templates will be sent. If Admins have cancelled the Tickets and opt to Refund, then a PDF Credit Note will be included in the Email Template if **Send Credit Note** is set to Yes. One of the following Emails is sent depending on if a Ticket or whole Booking was credited:

-   **ticket/cancel**
-   **booking/cancel**

### Cancelling Tickets and Issuing Refunds for Cash Basis Transactions

Cash Basis Ticket cancellations and refunds are distinct to Invoice Basis. For Cash Basis transitions the following rules apply:

-   Bookers can cancel their own Tickets via the My Bookings page before the **Change/Cancel** date. No refund is offered if Bookers cancel their own Tickets
-   Admins can choose to cancel/refund or cancel and refund Tickets at any time. If a refund is selected then this will automatically be processed via Stripe

There are three options available to Admins when managing Tickets:

-   **Cancel**
    -   Cancels booking/ticket with no refund
    -   Sends either the **booking/cancel** or **ticket/cancel** email templates
-   **Credit**
    -   Cancels booking/ticket
    -   The credit note will appear for the booker on the invoices page
    -   Issues a full refund via Stripe without cancelling tickets as only paid bookings can be credited in this workflow
    -   Sends the **payment/credit** email template with a credit note pdf attached
-   **Credit and Cancel**
    -   Cancels booking/ticket
    -   The credit note will appear for the booker on the invoices page
    -   Issues a full refund via Stripe without cancelling tickets as only paid bookings can be credited in this workflow
    -   Sends either the **booking/cancel** or **ticket/cancel** email template with a credit note pdf attached

#### Admins can refund or cancel:

-   **Individual tickets**
    -   Log into the **Admin Interface**
    -   Go to **Events**
    -   On the event **Actions menu** select **Bookings**
    -   Locate the relevant booking and select **Details** from the **...** **Actions Menu**
    -   From the **...** **Actions menu** you can also **Cancel**, **Credit** or **Credit and Cancel** as required
    -   Choose if you wish to trigger an email to the booker
    -   The ticket will be updated in the table based on the action selected
-   **All tickets in a booking**
    -   Log into the **Admin Interface**
    -   Go to **Events**
    -   On the event **Actions menu** select **Bookings**
    -   Locate the relevant booking and select **Details** from the **...** **Actions Menu**
    -   There are buttons at the bottom of the table for **Cancel**, **Credit** or **Credit and Cancel** the whole booking
    -   Choose if you wish to trigger an email to the booker
    -   The tickets and booking will be updated in the table relevant tables based on the action selected
-   **All bookings in an event**
    -   Log into the **Admin Interface**
    -   Go to **Events**
    -   On the event **Actions menu** select **Bookings**
    -   Click on the button **Credit & Cancel All Bookings**
    -   Choose if you wish to trigger emails to the bookers
    -   All bookings in the event will be updated

### How to Set Up the Invoice Basis Payment Workflow

The Invoice Basis payment workflow differs from Cash Basis as immediate payment is not required for the Tickets to be allocated to the Booker. An Invoice is issued to the Booker and they generally have 30 days to pay. This allows Bookers to pay directly into your company’s bank account via transfer and also Bookers can still pay via Stripe. In this workflow an Invoice is always issued and a Receipt when payment has been completed. There is an additional feature that allows Admins to approve Bookings and the management of this will be covered below. To enable Invoicing:

1.  Log into the **Admin Interface**
2.  Go to **Control Centre>Branches**
3.  Select the relevant Brach and click **Edit**
4.  Scroll down to the **Invoicing and Payment** section
5.  Select **Yes** for **Invoicing and Payment**
6.  Select the **Branch currency**
7.  Select **Invoice Basis** for **Payment Mechanism**
8.  If Gift Aid is required select **Yes** for **Allow donation tickets (Gift Aid**) - for more information please see the relevant guide.
9.  Decide if Invoice Numbers should be generated on a per event basis or if the invoice number can apply to all bookings issued in this branch by setting **Issue invoice numbers at event level** to **Yes** or **No**.
10.  Provide an **Invoice Prefix** number, if the above option is set to **Yes** then the invoice number field will appear on the **Event Settings Page**, however the number is applied using the same mechanism, its just the event which needs a separate number. As each invoice is generated the system will add a 5 digit number which will increase by 1 increment for each invoice generated. The Prefix if the number/detail that appears before the number, for example **LIVEEVENTS2024/00001**
    1.  Invoice prefix numbers can also be applied at an event level. On the event settings page provide a value for the **Invoice Prefix** and this will apply for any invoices for the event, ignoring the default set for the branch. The event specific invoice numbers will begin at **/00001** for each event.
11.  Set the option **Ticket price includes VAT by default**. This option will automatically include VAT in the ticket price and include this on the invoices. Most events will be VAT applicable and if you are setting this to **No** then ensure that you have the correct information.
    1.  **Yes** \- the tickets are subject to VAT and there will be a VAT line item on the invoice. When setting prices set them without including the VAT
        1.  Provide the **VAT Acronym** and **VAT Amount (%)**
    2.  **No** \- the tickets are not subject to VAT and there will be no reference to VAT during the payment process
12.  Decide if Receipts and Credit notes should be included in the Booking Confirmed Emails. Currently receipts will be sent for all transactions including those of £0.00
13.  Click **Save**

### How to Set Up Credit Approved Bookers

In the Invoice Basis workflows Bookers are not able to access their Tickets until they have completed payment. However, there might be circumstances where some Users need access before payment is completed. Some larger companies have 30 or 60 day payment terms once they receive an Invoice with a PO number, which might mean they are not able to process in time before the event. Therefore at an Admin's discretion, Bookers can be set up to bypass the need to pay before they can access their Tickets.  
Please note that, by default, the **Invoice Credit Approved** field will always be to “**No**” for all User, but it will be visible on the Admin Edit User page at all times. If the site normally requires payment, the override allows bypassing the payment requirement. If site-wide does not require payment, the override is effectively irrelevant but harmless - no need to hide or disable it.

To action this:

-   Log into the **Admin Interface**
-   Go to **Admin>Users**
-   Located the relevant user
-   In the **Actions Menu** select **Edit**
-   Set Invoice **Credit Approved** to **Yes**
-   Click **Save**

**Note** \- That there is an additional option on the Branch called **Credit Approved Users Must Provide PO**. If this is set to Yes the Credit Approved User will not be able to access their Tickets until they have provided a PO Number on the Booker Interface. Doing this shows that Bookers have shown their intention to pay the Invoice. You will need to make sure that your instructions to Bookers are clear and detail this step. The PO Number can be provided on the Booker’s Invoices page.

### How to Approve Pending Bookings

If **Pending Bookings** has been enabled then instead of the System automatically issuing an Invoice and taking the User to the payment page a **Booking Request** is created, which is reflected on the User's Booking page. This represents a placeholder Booking and although the Tickets will be taken off sale when the request is submitted the Tickets will not be attached to the Bookers account until the booking is approved by an Admin User. Admins can amend the Booking, adding or removing tickets, but once approved it is only possible to Cancel and Credit tickets. To add tickets to the invoice a new booking will need to be created. Once the pending booking is approved the Invoice is created and emailed to the booker who can then pay for their tickets online via Stripe or Bank Transfer. If paid via bank transfer then Admins will need to manually mark the Invoice as paid. Once paid a receipt is sent to the Booker.

-   Log into the **Admin Interface**
-   Go to **Events**
-   In the event **Actions menu**, select **Bookings**
-   On this page admins can review and amend all bookings. Each booking is coloured and ordered by status:
    -   **Blue** \- Pending booking
    -   **Yellow** \- Approved unpaid booking
    -   **Green** \- Approve paid booking
    -   **Red** \- Cancelled booking
-   If you wish to change the number of requested Tickets in a pending booking before approval go to the booking **Actions Menu** and select **Details**
-   Click on the **Edit** button
-   Change the number of tickets on the next screen to increase or decrease the tickets in the **Pending Booking**
    -   This feature will not allow admins to exceed the number of tickets that a user can book set up for the event
    -   There must also be tickets remaining in the event to be sold
-   Click **Update** to change the booking and the new number of tickets will be displayed on the details page
-   Once admins are happy with the **Booking Request** it is ready to be approved return to the **Bookings** page
-   Go to the **Actions Menu** and select **Approve Booking**
-   Click Approve in the modal and a confirmation email and invoice will be sent to the booker

### How Manage Emails for Invoice Basis Transactions

New email templates have been created to support the more complex workflow for Invoice Basis Transactions. These are listed below along with any attachments that are included in the email template. For more information about managing and setting up email templates read the **[Email Template Guide](/help-articles/how-to-set-up-branch-email-templates/)**.

-   **booking/request** - sent to the booker when they submit their ticket request. No attachments are included with this email but make sure to highlight that at this stage the booking requires approval from admin users
-   **booking/requestapproved** - sent to the booker when an admin user approves a booking request. This email will include a pdf of the invoice. It is advised to include the special value **@@payment\_link@@** which allows user to pay without having to log into the system. This link can be shared with other user.
-   **payment/receipt** - send to bookers when an online payment has been completed or when an admin user marks an offline payment as paid

If tickets or bookings are cancelled then one of the following email templates will be sent. If admins have cancelled the tickets and opt to refund then a pdf credit note will be included in the email template if **Send Credit Note** is set to yes. One of the following emails is send depending on if a ticket or whole booking was credited:

-   **payment/credit** - sent to users when a ticket or booking is cancelled and the cost of tickets is refunded. Note the payment is not automatically refunded and must be actioned by finance teams.
-   **payment/creditfinance** - sent to finance users to alert them to a credit note is being generated
-   **ticket/cancel** \- sent to the booker when a ticket is cancelled, if the ticket is credited at the same time this email will include a credit note
-   **booking/cancel** \- sent to the booker when a booking is cancelled, if the booking is credited at the same time this email will include a credit note

### Cancelling Tickets and Issuing Refunds for Invoice Basis Transactions

There will be instances when admins will want to cancel and refund tickets. For Invoice basis the workflow is more complex and dependent on the state of the payment.

-   Bookers can cancel their own tickets via the My Bookings page before the **Change/Cancel** date. No refund is offered if bookers cancel their own tickets
-   Admins can choose to cancel/refund or cancel and refund tickets at any time. Refunds will not automatically be processed, even if the payment has been made via Stripe. All refunds will need to be actioned manually outside of the system.

There are three options available to admins when managing tickets: Cancel, Credit and Cancel & Credit

-   **Cancel** - Note that Pending bookings can only be cancelled as there is nothing to credit
    -   Cancels booking/ticket with no refund
    -   Sends either the **booking/cancel** or **ticket/cancel** email templates
-   **Credit**
    -   Sends either the **booking/cancel** or **ticket/cancel** email templates with a credit note pdf attached
    -   The credit note will appear for the booker on the invoices page
        -   If the booking has been paid the **payment/creditfinance** will be sent to the finance team
            -   The refund will need to take place offline via the original payment mechanism
            -   An admin user will need to log into the system and mark the credit note as Paid to update the system
        -   If the booking is unpaid and the credit note meets the total of the invoice
            -   The invoice and credit note will be marked as paid automatically
        -   If the booking is unpaid and the credit note does not meet the total of the invoice
            -   When the booker goes through the payment process the credited amount will be discounted on the my basket page and the booker needs to only pay the outstanding amount
            -   **Credit and Cancel**
            -   Cancels booking/ticket
            -   Sends either the **booking/cancel** or **ticket/cancel** email templates with a credit note pdf attached
            -   The credit note will appear for the booker on the invoices page
                -   If the booking has been paid the **payment/creditfinance** will be sent to the finance team
                    -   The refund will need to take place offline via the original payment mechanism
                    -   An admin user will need to log into the system and mark the credit note as Paid to update the system
                -   If the booking is unpaid and the credit note meets the total of the invoice
                    -   The invoice and credit note will be marked as paid automatically
                -   If the booking is unpaid and the credit note does not meet the total of the invoice
                    -   When the booker goes through the payment process the credited amount will be discounted on the my basket page and the booker needs to only pay the outstanding amount

Admins can refund or cancel:

-   **Individual tickets**
    -   Log into the **Admin Interface**
    -   Go to **Events**
    -   On the event **Actions menu** select **Bookings**
    -   Locate the relevant booking and in the **Actions menu** select **Details** from the **Actions Menu**
    -   Go to the **Actions menu** for the relevant ticket and click on either **Cancel**, **Credit** or **Credit and Cancel** as required
    -   Choose if you wish to trigger an email to the booker
    -   The ticket will be updated in the table based on the action selected
-   **All tickets in a booking**
    -   Log into the **Admin Interface**
    -   Go to **Events**
    -   On the event **Actions menu** select **Bookings**
    -   Locate the relevant booking and in the **Actions menu** select **Details** from the **Actions Menu**
    -   There are buttons at the bottom of the table for **Cancel**, **Credit** or **Credit and Cancel** the whole booking
    -   Choose if you wish to trigger an email to the booker
    -   The tickets and booking will be updated in the table relevant tables based on the action selected

### How to Download Finance Reports

Events offers some generic reports for which includes all of the finance data. To run the report:

1.  Log into the **Admin Interface**
2.  Go to **Admin>Reports**
3.  Click on the **Finance Report**
4.  Filer as required
5.  Click **Download**

### How Bookers can Add a PO Number to Their Invoice

Events allows bookers to supply a PO number once the invoice has been generated. After the PO is added bookers can download the new invoice from the My bookings section. Admins can add PO numbers by logging in as a Booker. To add the PO number the booker requires an Approved Booking:

-   Log into the Booking Interface
-   Go to Invoices
-   Select Add PO Number for the relevant invoice and a modal will appear
-   Enter the PO number into the text box and click OK
-   A message will appear to confirm the PO number has been added, click OK
-   Click View Invoice to access the updated invoice
-   Repeat the previous steps if the PO needs further updating - there is no limit to the number of updates

### How Admins can Update PO Numbers on Invoices

Admins can now update the PO number directly from the **Invoices List** using the **Update PO Number** action.

When a PO number is updated:

-   the change is recorded in the **actions log**
-   the system can optionally send the **invoice notification email** to the booker

This allows finance teams to keep invoice records accurate without needing to reissue invoices. To do so:

1.  Log in to the **Admin interface**.
2.  Locate the relevant **Event**.
3.  Click on the **...** **Actions Manu > Invoices**
4.  Find the invoice you want to update.
5.  Hover over the **Action** menu on the right, and select **Update PO Number**.
6.  A pop up will appear asking you 'Update the PO number for current invoice number e.g. 00025/1C' and 'Are you sure you want to continue?'
7.  Once you filled in these fields make sure click the **Update** button and it will be saved.

#### What happens next

After saving:

-   A **confirmation message** will appear for the admin confirming the update and whether an email notification was sent.reate invoices.
-   The **PO number is updated** on the invoice.
-   The update is recorded in the **actions log**.
-   If enabled, the **invoice notification email** will be sent to the booker.

### How to Change an Address on an Invoice

Events enables bookers to manage multiple addresses within the address book found in their settings. On the **My Basket** page, they can select different addresses for invoicing. Once they proceed beyond this page, the invoice is generated, and the selected address is locked in, preventing further changes by the booker.

In Events, admins have the functionality to select an alternative address from the booker’s account if necessary. Before proceeding, ensure that the required address has been added to the booker’s address book to facilitate any changes.

1.  Log into the **Admin Interface**
2.  Go to **Admin>Invoices**
3.  Select the relevant invoice click on the **...** **Actions Menu**
4.  Select **Change Invoice Address**
5.  A list of available addresses will appear as a bulleted list in the modal
6.  Select the relevant address
7.  Type **I AM SURE**
8.  Click **Update**

All of the pdf finance files linked to this invoice will be updated to the selected address.
