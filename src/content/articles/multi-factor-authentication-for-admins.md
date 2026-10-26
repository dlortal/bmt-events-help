---
title: "Multi-Factor Authentication for Admins"
summary: "BAFTA Events provides Multi-Factor Authentication for Admins logging in to the Admin interface."
category: users
order: 100
date: 2024-09-13
updated: 2026-07-29
status: published
wordpress_id: 1289
---

BAFTA Events provides Multi-Factor Authentication (MFA) for Admins logging in to the Admin interface. MFA provides an additional level of security for all Users, protecting the sensitive data and information hosted in Events. When Admins log in they will need to enter a password and a 6-digit code - the result is that an unauthorised User will need to know not only the account’s password but also have access to the mechanism to which the code is sent.

There are 3 MFA options for BAFTA Event's Admins:

-   **Google Authenticate** – a code is generated in an app that needs to be downloaded to a phone (Android/iPhone supported only).
-   **Email** – an email containing a 6-digit code is sent to a specified email address.
-   **SMS** – an SMS containing a 6-digit code is sent to a specified phone number (Restrictions Apply – see below).

Please note that -

-   If Users use SMS or Email mechanism (using the same browser, device, and not clearing their cache) the code should last 30 days.
-   If they use Google authenticator, then the latest validation will last until they close the browser.

## How to Set Up MFA

1.  Log into the **Admin Interface**
2.  Go to **Control Centre>Configuration**
3.  On the next page there is a value, which can be edited:
    1.  **Allowed MFA options for ‘Admin’** – Admins
4.  Select **Edit** next to the User Type you wish to enable MFA for
5.  Enter any combination of **GOOGLEAUTH**, **SMS**, **EMAIL** in the **Value** field separated by commas to enable the required MFA mechanisms
6.  Click **Save** before leaving the page
7.  If setting for Admin Users you will be required to enter a MFA code for your account

## Setting Up SMS MFA

SMS messages are sent via AWS. This service is not immediately available as an application is required which AWS needs to approve. The application is based on regions and currently, only Europe has been tested. Sending SMS messages to United States phone numbers is extremely difficult due to US Government legislation so we advise that SMS is not the only option provided for these Users. If you wish to enable SMS for Users please submit a Support Ticket and confirm the regions to which you wish to send SMS messages. BMT will make the application on your behalf.

Also, note that the sending of SMS messages will incur additional AWS costs.

## Setting Up Email MFA

Events provides Email sending as standard, so there are no additional costs for this method. In order for the Emails to send you will need to ensure that the Email Templates are set up correctly.

There are Email Templates you will want to consider editing depending on your MFA choices. These templates allow Admins to customise content specifically for the intended audience:

-   **admin/mfa** – sent to Admin Users

Each template can be customised as Admins require but needs to contain the special value: **@@loginCode@@** which will include the 6-digit MFA code.

For more information about managing Email Templates read [this](/help-articles/how-to-set-up-branch-email-templates/) guide.

## How to Reset MFA

For any reasons, Admin Users have the ability to reset MFA for all other Users Types at any stage. This will allow the user to choose an new MFA type, if available. No emails containing MFA codes will be triggered to the user.

FOR ADMINS:

Please note that you will have to be a Super Admin in order to do this. 

1.  Log into the **Admin Interface**
2.  Go to **Control Centre>Admin Users**
3.  Look for the relevant Admin and click on Reset MFA
