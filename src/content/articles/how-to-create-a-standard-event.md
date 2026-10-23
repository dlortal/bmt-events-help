---
title: "How to Create a Standard Event"
summary: "Creating an Event is the most fundamental process in the Events platform. This is where Admins can build out their activities and initiatives for end Users to see."
category: creating-an-event
order: 100
date: 2024-11-11
updated: 2026-08-06
status: published
wordpress_id: 1323
---

Creating an Event is the most fundamental process in the Events platform. This is where Admins can build out their activities and initiatives for end Users to see.

Before an Event can be created, Admins must ensure that they have comprehensively [set up their instance](/help-articles-category/support/). This can include the Branch settings, User Types, Ticket Types, Venues and Auditoria.

Please note, Admins can retrospectively edit an Event once it is created and update most of the fields if required.

1.  **Log in** to the **Admin side** of Events.
2.  Select **Events List** from the left-hand menu tabs.
3.  Ensure the **correct Branch** is selected from the white drop-down box, just above the menu tabs.
4.  Select the **Add button** in the top right hand corner.
5.  Fill out the following inputs:

### Basic Details

**Event is a Parent** - select No from the drop-down list. To create a Parent/Child event set up, follow this [guide](/help-articles/how-to-create-a-parent-child-event-setup/).

**Sales Platform** - select Events Ticketing from the drop-down list. This ensures all bookings and payments go through the Events platform.

**Venue** - select in which Venue the Event will be held from the drop-down list of [Venues](/help-articles/how-to-create-and-edit-venues/).

**Auditorium** \- select in which Auditorium the Event will be held from the drop-down list of [Auditoria](/help-articles/how-to-build-auditoria-in-the-system/).

**Overbook Capacity** - this input is *optional*. Add an Overbook figure to increase the capacity of the Event. This must first be defined when building the respective [Auditoria](/help-articles/how-to-build-auditoria-in-the-system/).

**Use Seat Planner** - select No from the drop-down list.

**Seat Prices** - please ignore this setting.

**Name** - input the Event’s name. This will show externally to end Users.

**Internal Name** - input an internal name for the Event, which will only visible to Admins. This can be helpful if there are multiple sessions of a similar nature.

**Event List Override** - Select another Branch where you wish the Event to appear in, aside for the one where the Event is being created in.

**Type** \- select the respective tags to apply to the Event. These can be created via the steps in this [guide](/help-articles/how-to-create-custom-event-tags/).

**Status** \- select a relevant status from the following options:

-   Not Open - this will show to Users and inform them when the Event will be open to bookings.
-   Open - this will show as Available to Users and let bookings take place.
-   Waitlist - this will allow Users to sign up to a Waitlist.
-   Closed - this will inform Users that the Event is now closed to new bookings.

**Lock Status** - it is advisable to keep this setting selected as No. If Yes is selected, the Event status cannot automatically change i.e. if an Event sells out and needs to move to Waitlist.

**Automatic Waitlist** \- select an option:

-   None - this option means that when the Event sells out Users will not be able to sign up to a Waitlist to be notified of new tickets.
-   Automatic Waitlist - this option means that when an Event sells out Users can sign up to a Waitlist to hear if/when more tickets become available. A list will begin to accrue on the Admin interface and Admins will need to manually invite Users when there is more availability.
-   [Automatic Alert List](/help-articles/how-to-utilise-the-alert-list-feature/) - this option means that when an Event sells out Users can sign up to a Waitlist to hear if/when more tickets become available. However, with this setting, the system will automatically emails Users when more tickets become available and requires no Admin intervention (other than initial set up).

**Event Low/Limited Availability Override** - select an option:

-   Default - this will follow the parameters outlined in the [Branch settings](/help-articles/how-to-set-event-availability-tags/).
-   Yes - this will allow Admins to override the parameters set in the Branch settings.
-   No - this will allow Admins to override the parameters set in the Branch settings and show no Availability Tags.

**Short Description** - input a short description of the Event in under 230 characters. This will show on the Event List page.

**Medium Description** - input a medium description of the Event. There is no character limit here, but please be advised that too many characters will push down the Call to Action button e.g. Book Tickets.

**Long Description** \- input a long description of the Event.

**Tip** \- all descriptions have a WYSIWGY editor to allow text to be stylised and formatted. Additionally, hyperlinks can be added and rich media hosted, such as images or videos.

**Event Specific Ticket Select Page Copy** - select Yes or No from the drop-down list. If Yes is selected, a text box will appear below which will allow Admins to add copy that will present on the Ticket Selection page. This can be useful if Admins believe Users will need guidance on what tickets to select.

**Bookings Open** - input the date and time that the Event is open for bookings.

**Bookings Close** - input the date and time that the Event closes for bookings.

**Event Start Date / Time** - input the date and time that the Event starts.

**Event End Date / Time** - input the date and time that the Event ends.

**Show Event End Time** - in the front-end, event listings can display the event end time alongside the start time. This setting can be enabled or disabled on the Events Settings, depending on organisational preference.

When this feature is enabled, the end time will appear anywhere the event start time is shown, including:

-   event listings
-   event detail pages
-   the booking flow

For example:

-   Monday 26 June, 6pm – 10pm BST
-   Monday 26 June, 6pm – Tuesday 27 June, 2am BST

The configured end time will be displayed when one has been entered.

**Last Change Date / Time** - input the date and time that Users can no longer edit their Guest Details. This deadline can be utilised for more high profile Events, if Admins need to send details to caterers or production companies.

**Last Cancel Date / Time** - input the date and time that Users can no longer cancel their tickets. This deadline can be utilised for more high profile Events, if Admins need to send details to caterers or production companies.

**Tip** \- Admins can overlap the Bookings Open/Close times with the Event Start/End times to receive bookings throughout the Event day.  
  
**Note:** Please be aware that the date picker now uses the browser's native functionality, so its appearance may vary depending on the browser. To ensure everything runs smoothly, it's important to check that all dates and times are accurate before finalising the event setup. This helps prevent any potential issues with event visibility, ticket availability, and overall functionality on the live site.

**Event Image** - upload an image for the Event that will be displayed throughout the booking process. It *must* be 600x400 px.

**Require Attendee Names** - select an option from the drop-down list:

-   Yes - this will require the lead Booker to input their Guest names via the My Bookings tab before they can receive their tickets.
-   No - \\this means the User is not obligated to add their Guest names.

**Automatic Booker Ticket** - select Yes or No. If Yes, the system will assign the first ticket to the account making the Booking.

**Tip** \- select No for the above option if Admins suspect someone will be booking tickets on behalf of someone else i.e. assistants or company representatives.

**Issue Tickets** - select **No** to not issue tickets to the Event, or select **Yes** to issue tickets.  
If **Yes**, another drop-down will appear where the **Ticket Template** can be selected. Ticket Templates are built at the Branch level.  
If the Ticket Template is set, this will override the 'Ticket Design' option set below.

**Booking Checkboxes** \- when booking tickets to an Event, Users will need to consent to the T&Cs by marking a checkbox. This input enables Admins to add in further checkboxes that the User will need to consent to before proceeding to book tickets e.g. I understand tickets are not refundable.

**Additional Booking Information** - select Yes or No from the drop-down list. If Yes is selected, the end User will see a textbox on the Ticket Selection page where additional information can be added. This is useful for high profile Events where Admins may need to understand who is applying for tickets, or for drop-in style Events where it would it assist to know questions beforehand. The answers can be found within the User’s booking.

**Extra Ticket Data** - Admins can select from a number of Guest Data fields they would ideally like Users to input. Users have the ability to input these via the My Bookings tab.

**Extra Ticket Data Mandatory** - Admins then have the ability to select the Guest Data fields again from the previous selection to make them mandatory. If selected, the User will not be able to receive their tickets before inputting this information.

**Event Listability** - this option determines whether an Event will be displayed on the Events List page. Select an option from the drop-down list:

-   Everyone - this means any User can see the Event on the homepage. This includes when a logged out User arrives on the site.
-   Only People who can Book - this means only User Types granted access to the Event can see it on the homepage.
-   No One - this means the Event will not to be listed on the homepage. This is useful if Admins want to keep their Event hidden/private.

**Event Visibility** - this option determines whether a User can proceed to the Event Detail page and continue to book tickets. Select an option from the drop-down list:

-   Everyone - this means any User, regardless of User Type, can view and book into an Event.
-   Only People who can Book - this means only Users granted access to the Event can view it and book tickets.
-   No One - this means no Users can view or book in to the Event.

**Tip** \- Admins can utilise the above two options to create private events.

**Display Related Events** - select Yes or No from the drop-down list. If Yes is selected, three more drop-downs will appear. From here Admins can select up to three Events that will be displayed at the bottom of the respective Event Detail page. This can help with increasing engagement for other Events and/or cross-pollination.

**Codes** \- please ignore this input.

**Email Variant** - this drop-down provides Admins with the ability to send Email Templates linked to the respective Event.

**Reporting Tags** - please ignore this input.

### Ticket Rules

The next section, the Ticket Matrix, determines what User Types can book into the Event, which Ticket Types and how many.

1.  Press the **‘Select User Type to Add New Row’** drop-down. This will present a list of predefined User Types, please select the desired one. This will add a **row** to the ticket matrix table.
2.  Press the ‘**Select Ticket Type to Add New Column**’ drop-down. This will present a list of predefined [Ticket Types](/help-articles/how-to-manage-ticket-types/), please select the desired one. This will add a **column** to the ticket matrix table.
3.  Add a **figure in the intersection** where User Type and Ticket Type cross over. This determines how many tickets that respective User Type can book for the Event.
4.  **Repeat** for all User Types and Ticket Types for the Event.

**Tip** \- Admins can utilise the above matrix to determine how tickets a certain User Type can book.

### Terms and Conditions

Please note if T&Cs are set here, they will override event [Terms and Conditions set at the Branch level](/help-articles/how-to-create-edit-and-apply-terms-conditions/).

**Admin Section** \- input a header title for the T&Cs.

**Summary** - input a summary for the Event’s T&Cs. Please note, this is all that would be displayed to the User before they select ‘Read More’. Admins may wish to input the full T&Cs here.

**Extra T&Cs** - further space to add more copy.

**Standard T&Cs** - [predefined T&Cs](/help-articles/how-to-create-edit-and-apply-terms-conditions/) can be selected here, which the User will have to consent to.

### Ticket Validator App

Please select the relevant Admins from the Available column who can check guests into this Event. Please note, only Admins who belong to the respective Branch can check Guests in.

### Promotions

Please select the relevant [Promotions](/help-articles/how-to-create-promotions-and-apply-them/) to apply to this Event, if desired.

### Next Steps

7.  Select the **Save button**. This will bring the Admin to top of the page.
8.  Select the **Seat Prices tab**.
9.  This will show a matrix where **prices** can be determined by Ticket Type.
10.  Input a **price figure** under each Ticket Type. This can be £0 if an Event is free.
11.  Ensure to click Save.
12.  It is advisable to **login as a test User** to ensure the correct price is displayed.
13.  Following from the above, select the Quotas tab from the left hand corner and utilise this [guide](/help-articles/how-to-use-quotas/) if desired. Quotas allow Admins to define the audience composition of an Event.
