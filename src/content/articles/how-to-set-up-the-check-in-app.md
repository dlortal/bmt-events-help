---
title: "How to Set Up the Check-in App"
summary: "The BAFTA Events platform is comprised of three interfaces: Booker Interface, Admin Interface and the Check-in App."
category: managing-an-event
order: 100
date: 2024-10-17
updated: 2026-08-10
status: published
wordpress_id: 1308
---

The BAFTA Events platform is comprised of three interfaces: Booker Interface, Admin Interface and the Check-in App. Together these three sites facilitate the journey from creating events, to booking tickets and marking guests attendance.

The Check-in App is a progressive web app (PWA) meaning it is an app built using web platform technologies, but can be saved to a device’s homepage in order to appear as a standard app.

Setting up the app is a threefold process: at the Admin User level, Event level and App level. Please read the sections below to ensure all steps are covered before starting to check guests in.

Lastly, please ensure to set up and download the app ahead of time. Keep it updated and always run a test before starting the check-in process.

### Admin Level

1.  **Log in** to the Admin interface.
2.  Select **Control Centre** from the tabs menu.
3.  Select **Admin Users** from the menu page.
4.  Navigate to the respective **Admin User**.
5.  Select **Edit** from the **Actions** menu on the right hand side.
6.  Navigate down to the **Ticket Validator App** section:

**Enable App for this User** - select Yes from the drop-down list.

**Valid Ticket Types** - to enable the Admin User to check in all Ticket Types, please leave the Selected column blank. To only allow certain Ticket Types, please select them from the Available column.

**Note** \- only Admin Users who belong to the Event’s respective Branch can check guests in. To update an Admin’s Branch, please follow steps 1-5 above and update the Branch field.

7.  Ensure to review and **Save & Close**.

### Event Level

1.  Select **Events List** from the tabs menu.
2.  Navigate to the respective **Event**.
3.  Select **Edit** from the Actions menu on the right hand side.
4.  Navigate to the bottom of the page and find the **Ticket Validator App** section.
5.  Select all **relevant Admin Users** from the **Available** column. This will grant the correct permissions to check guests into this specific Event.

**Optional – Enable Test Mode**  
If you wish to run test scans ahead of the event start time, you may enable **Test Mode**.

-   In the **Test Mode** field, select **Yes** from the dropdown.
-   This allows ticket scanning in the Check-in App prior to the event’s scheduled start.
-   Test Mode is optional and can be disabled once testing is complete.

6.  Review and ensure to **Save & Close**.

**Note** \- Admins can begin to check guests in at any time on the Event Start Date, regardless of Event Start Time. Please keep this in mind and utilise the time to run any tests.

### Check-in App Level

1.  Follow the **Check-in App link** as provided by support, or during onboarding.
2.  Open as a **webpage** and/or save to the respective **device’s home screen**.
3.  Log in using the relevant **Admin credentials** from the Admin interface.
4.  Select **Set Up Device** from the menu options.
5.  Enter the **Device Name** e.g. John’s phone or Tablet 1.
6.  Enter the **Device Location** e.g. Check point 1.
7.  Select the respective **Event** from the Event ID drop-down list to begin marking attendance.

**Note** \- Admins can only check guests in for one Event at a time. Please select the Event accordingly from the Set Up Device page.

**Tip** \- the Device Location name will be logged in the check-in app when a scan is completed.

### Check-in App Pages

The Check-in App offers two modes of marking guests attendance: scanning the QR code or checking names in.

**Scan Ticket** \- open this option to begin scanning QR code tickets with a mobile device’s camera. Access to the device’s camera will be required.

**Ticket Search** - open this option to check guests in by name. Use the search feature to find specific names.

**Seat Search** – this page displays all unassigned seats for the events you have access to; you can open the menu in the top right corner and select **Seat Search**, also accessible from the main menu of the Check-in App beneath **Ticket Search**, to view currently available seats.  
  
Once selected, the page displays a list of all **unbooked seats** for the events you are authorised to access. Each seat entry shows the seat number and type, along with the option to assign the seat to a guest.  
  
At the top of the page, there is a **Seat Number** search bar which allows you to locate a specific seat directly by entering its seat number. After entering a seat number, select **Refresh** to update the results.  
  
To assign a seat, select **Assign** next to the relevant seat.

**All Scans** - this page will show all the successful scans so far.

**View Last Scan** - this page will show the latest scan’s result.

**Note** \- all attendance data collected via the check-in app will be automatically synced to the Attendance page of the respective Event (on the Admin Interface). If the app loses connection to WiFi, Admins will still be able to scan tickets and any data will sync once the connection is restored. Loss of connection can be seen via a red cloud icon in the top left hand corner.

**Note** \- only Events that have Tickets issued can be checked in on the app. The app cannot be used to check names in *alone*, there must be tickets (with or without QR codes) issued against the names.

**Tip** \- the [Attendance page](/help-articles/how-to-confirm-attendance/) on the Admin Interface of Events can utilised alongside the app.

### Colour Codes in the Check-In App

The app uses colour-coded indicators, depending on the action:

-   **Green** tick (*pass*) - the ticket has been scanned successfully
-   **Blue** tick (*pass + sighting*) - the ticket has been scanned at least once. The date and time of the first scan can be seen on the 'Sighting' section.
-   **Orange** tick (*warn*) - the ticket is valid, but the ticket type allowed to that Admin is not the same as the ticket type that is being scanned, so it can't be checked in. This message will be displaying: "This ticket type does not have access to this area." Please note, a normal Admin (without Super Admin permissions) can be allowed to check different ticket types - this can be edited on the Admin's Account details.
-   **Red** tick (*fail*) - the ticket has failed to scan. The message displaying could be: 'Event ID mismatch! Event ID on ticket does not match Event ID in settings.' or 'Ticket signature is invalid.'
-   **Red** tick (*invalid*): the ticket has failed to scan. The message displaying is: 'This QR code is invalid.'
-   **Red** tick (*cancelled*): the ticket has failed to scan, as the ticket has been cancelled.
