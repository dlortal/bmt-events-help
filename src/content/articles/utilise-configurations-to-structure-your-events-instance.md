---
title: "Utilise Configurations to Structure your Events Instance"
summary: "The BAFTA Events system is a comprehensive and powerful ticketing platform that specialises in facilitating Membership based events, Awards workflows and centring accessibility."
category: support
order: 100
date: 2024-07-29
updated: 2026-07-15
status: published
wordpress_id: 1260
---

The BAFTA Events system is a comprehensive and powerful ticketing platform that specialises in facilitating Membership based events, Awards workflows and centring accessibility. It has a multitude of functions that enable Admins to create bespoke workflows and processes that fit their organisation’s requirements.

Utilising this granular functionality begins with defining the Organisational setup in both the Configuration page and Branch settings. System configuration involves the structural setup and arrangement of each individual functional unit.

For example, default communication answers or what options to include on a drop-down.

### How to View and Edit Configurations

1.  **Log in** to the Admin side of BAFTA Events.
2.  Select **Control Centre** from the left-hand side menu.
3.  Scroll down and click on **Configuration**.
4.  **Navigate** to the desired Configuration or use the search bar at the top of the page to find it.
5.  Click on the **...** Actions Menu icon on the right-hand side of the relevant item, and select **Edit**.
6.  Edit the **Value** field whilst taking the **Definition** into account.

*For instance*, if the Definition says the Configuration is ‘comma separated’, make sure the Values follow this set up.

7.  **Review**, and ensure to **Save** before leaving the page.

### Configuration Values Definitions

**Accessibility Email Send Options** - Admins can select from a range of accessibility options. If a User selects one of these options when making a booking, the booking/accessibilityRequested will be triggered to Admins to inform them of such.  

**Cost Centre Codes** - Admins can input a range of Cost Centre Code options that will be displayed on a drop-down menu on the Branch setting, Event creation and Ticket Type pages. Cost Centre Codes are referenced on both the Invoice Payout and Invoice Posting reports.  
  
**Default from Email Address** - input the email address to be used if no ‘From Address’ is specified in the email template.  
  
**Default from Email Name** - input the Sender Name to be used if no sender name is specified in the email template.  
  
**Department Codes** - Admins can input a range of Department Code options that will be displayed on a drop-down menu on the Branch setting, Event creation and Ticket Type pages. Department Codes are referenced on both the Invoice Payout and Invoice Posting reports.  
  
**General Ledgers** \- Admins can input a range of General Ledger codes options that will be displayed on a drop-down menu on the Branch setting, Event creation and Ticket Type pages. General Ledger codes are referenced on both the Invoice Payout and Invoice Posting reports.  
  
**Job Codes** \- Admins can input a range of Job Code options that will be displayed on a drop-down menu on the Branch setting, Event creation and Ticket Type pages. Job Codes are referenced on both the Invoice Posting report.  
  
**Limit for Invoices Page** - input the number of Invoices displayed on the ‘My Invoices’ tab on the Booker Interface.  
  
**Minimum Admin Password Length** - input the minimum number of characters permissible for Admin accounts.  
  
**Minimum User Password Length** - input the minimum number of characters permissible for User accounts.  
  
**Pending Booking Expiry Time** - number of days that a Pending Booking will ‘expire’ by. After this, the approved booking request will be automatically cancelled.  
  
**Require Pending Booking for Invoice Basis** - If set to Yes, Admins will need to approve all ticket requests before payment can be completed.  
  
**Send Finance Credit Note Email** - If set to Yes, the payment/creditFinance email template will be triggered to the respective email. This can be used to inform Finance departments that a refund may need to take place.  
  
**Send Receipts When Invoice Paid as Online** - If set to Yes, the payment/receipt email will be sent when an Admin User manually marks an invoice as Paid Offline. Set to No to not send this email.  
  
**Shortcut Icon** - Shortcut Icons refer to the small image that is visible on a browser tab and is typically a company’s logo. To update the platform’s shortcut icon, input a link to the image that is hosted on the internet.  
  
**Show Invoices Page for Users** - input Yes or No to determine whether Users should see the My Invoices page on the Booker Interface.  
  
**Time Zone Display** - This configuration defines how Time Zones are displayed across the Events platform. Please input one of the following values: Always (always display the event time zone); Never (never display the event time zone); Different (displays the time zone only if the user is in a different time zone to the event).

### Please Do Not Edit These Values

-   Maximum User Cache Check
-   Event Debugging IPs
-   Events New Design
-   repTest
-   Scheduled Update Bypass IPs
-   Show Scheduled Update Page
-   Show Site Update Banner
-   Show Update Address Modal
