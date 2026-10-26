---
title: "How to Suspend Bookers Who Regularly Miss Events"
summary: "The Suspension feature enables Admins to suspend Users from booking further upcoming events or signing up to a waitlist for a period of time if they frequently do not attend…"
category: users
order: 100
date: 2024-07-29
updated: 2026-07-15
status: published
wordpress_id: 1266
---

The Suspension feature enables Admins to suspend Users from booking further upcoming events or signing up to a waitlist for a period of time if they frequently do not attend events. 

Admins can set specific criteria for suspension eligibility at the branch-level, including number of event days missed within a specified timeframe and the suspension length. Admins can opt for Users to be automatically suspended, or simply marked as ‘Suspendable’ for review and potential manual suspension. 

The Suspension feature was developed to provide Admins with a deterrent for missing events, with the overall aim of increasing event attendance. This is particularly helpful for membership based organisations or those who offer free tickets. 

Actioning it is fourfold: enabling suspension email templates; setting suspension criteria; viewing the suspension list; and manually suspending Bookers.

## How Enable the Suspension Email Templates

During the Suspension process, Users may receive a variety of emails from the system and as such, it is important to review email copy ahead of utilising the Suspensions functionality.

**Warning Email** (event/missed) - an email to warn Users they will be eligible for suspension or a ‘Temporary Booking Freeze’ if they continue to no-show.

**User Suspended** (user/suspended) - an email to inform the User they have been suspended from booking events for a period of time.

**Suspension Changed** (user/suspensionChanged) - an email to inform the User their suspension has changed.

**Suspension Ended** (user/suspensionEnded) - an email to inform the User their suspension period has ended.

To edit Email Templates, please follow the below steps or read [this guide](/help-articles/how-to-set-up-branch-email-templates/) for detailed information.

1.  Log into your **Admin Interface**.
2.  Select **Email & Comms** from the left-hand side menu, and select **Email Templates**
3.  **Navigate** to the respective template.
4.  Select **Edit** from the right hand side.
5.  **Edit** the details accordingly.
6.  Ensure to **Review**, and **Save** before leaving the page.

## How to Set Suspension Criteria

Suspension rules are set at the branch level, meaning only members from the specified branch will be suspended if they miss an event. Members from other branches or public users are not affected by these rules. Members from other branches will receive a "missed event" email to inform them of the absence; however, it will not currently count towards their missed event tally.

Suspension criteria are configured per member type, allowing for different suspension rules across various membership categories. To send emails to members outside of the current branch, a suspension rule needs to be established for that user type.

To set the rules:

1.  Log into the Admin Interface
2.  Go to **Control Centre>Branches** from the header menu
3.  Navigate to the **Actions Menu** in the right-hand side of the desired Branch, and select **Edit**
4.  Navigate to the **Suspension** section.
5.  Edit the first row in the table to set the first rule b selecting the following options:

-   Select the **Member Type** - the rule set will apply to this member type. Selecting ALL will create a rule for all member types which do not already have a rule in the table
-   **Event Days Missed** - input the number of event *days* the User has to miss to be eligible for suspension. Please note, this does not refer to the number of events, but the number of days e.g. if a User misses two events in one day, this will count as '1' day missed.
-   **Within How Many Days** - input the number of days the above criteria is applied to. 
-   **Default Suspension Length (Days)** - input the number of days the User will be suspended for. 
-   **Automatically Suspend Users who Meet the Criteria** - select whether to automatically suspend the User, or not. If selected ‘No’, the User will be marked as ‘Suspendable’. Note that this will default to No for user types outside of the current branch.
-   **Send a Warning Email when a User Misses an Event** - select whether to send the User an automatic warning email if they miss an event. 
-   **Suspended Users can Add themselves to Event Waitlists** - select if the Users can add themselves to waitlists during a suspension period.

8\. Review, and ensure to **Save** before leaving the page. 

**Note** - this new suspension criteria will apply to any upcoming events or events that have not yet had the attendance confirmed. The action of Confirming Attendance on the Attendance page is what pulls the respective Users into potential suspension eligibility.

## Excluding a Booker from Suspension Rules

Admins can exclude individual Users from suspension rules where required. When this setting is enabled for a specific User, they will not be suspended or marked as suspendable by the system, even if they meet the configured suspension criteria.

To exclude a User from suspension rules:

1.  Log into the Admin Interface.
2.  Navigate to the appropriate Branch.
3.  Go to the **Users** page from the left -hand menu.
4.  Locate the desired User.
5.  On the right-hand side, hover over **Actions** and select **Edit** to open the User’s profile page.
6.  Scroll down to find the **Exclude from Suspension Rules** setting.
7.  This setting is set to **No** by default. Expand the dropdown and select **Yes** to activate it for that specific User.
8.  Select **Save** before leaving the page.

## Viewing the Suspension List

To view all suspended Users or Users marked as suspendable, follow these steps -

1.  Select **‘Users’** from the left-hand menu.
2.  Select **‘Suspensions’** from the page menu.
3.  Opt to **filter** the table by Suspended or Suspendable, via the ‘Suspension’ column drop-down.

-   **Suspendable** - Users who match the Suspension criteria but were not automatically suspended as per the branch-level suspension criteria will be displayed here.
-   **Suspended** - Users who have automatically or manually been suspended in accordance with the suspension criteria will be displayed here.
-   **Missed Event** - Users who have missed some events, but not enough to be suspended or marked as suspendable.

The table will show the User’s details, such as: ID, User Type, First & Last Name, User Email and External Attributes. Additionally, it will display the following data relating to their suspension -

-   **Suspension** - number of Event days missed.
-   **Event Names** \- the names of Events that were missed.
-   **Event Start At** - date and time of when the above Events began.
-   **Who Didn’t Attend** - number of User’s party that did not attend.
-   **Ticket ID & Name** - the ticket ID and name of the User’s party who did not attend.

## Manually Suspending and Unsuspending Users

**Manual Suspension and Unsuspension via the Users Page**

Admins can now manually suspend or unsuspend members directly from the Users page when required. This provides greater flexibility and includes the following:

-   Optional reasons recorded
-   Clear audit logging
-   Automatic confirmation emails

**To manually suspend a User:**

1.  Select **Users** from the left-hand menu.
2.  Select **Find User** from the page menu.
3.  On the Users page, locate the specific User you wish to suspend.
4.  Hover over the **Actions** menu on the right-hand side and select **Suspend**.
5.  A pop-up will appear requiring:
    -   The date the suspension starts and ends
    -   A reason for the suspension (this field is required)
6.  Enter the appropriate information and select **Suspend User** to complete the action.

Once completed, the suspension will be logged against the User and a confirmation email will be sent automatically.

Circumstances may arise where Admins need to manually suspend Users who have been flagged as suspendable.

1.  On the Suspensions page, navigate to the **Actions Menu** on the right hand side of the table.
2.  Select **‘Suspend’** from the drop-down menu.
3.  A pop-up will appear - **input** the reason for suspension and the date the User should be suspended until.
4.  The newly suspended User can be viewed by **selecting ‘Suspended’** from the ‘Suspension’ drop-down list above.
5.  Under the ‘Suspended’ filter, Admins can view when a User’s suspension is due to end in the Suspension column.

**Note** - Suspensions will be logged in a User’s activity log.

**Suspension history visibility:** A suspension history table has been added to the Events admin user page. This shows a member’s past suspensions, including the dates they occurred, the reason they were applied, which events were missed and whether each action was applied automatically or manually. This improved visibility supports consistent decision-making and helps admins respond more clearly to member queries or appeals.

To unsuspend a User early, follow these steps -

1.  **Filter** by Suspended, on the Suspension page.
2.  Navigate to the **Actions Menu** on the right hand side of the table.
3.  Select **‘Edit’** from the drop-down menu.
4.  **Navigate** to the Suspension section of the page.
5.  **Edit** the ‘Suspended Until’ date into a date in the past.
6.  **Input** a reason, and Save.
7.  **Ensure** the User is now removed from the Suspended list.

## Suspension Rules

The following points count as one ‘strike’ or Event Day missed, and will count towards the suspension parameters set.

-   If a booker or their guest miss an event.
-   If a booker and all their guests miss an event.
-   If a booker or their guest miss multiple events in one day.
-   If a booker and all their guests miss multiple events in one day.

The following points should be taken into consideration when viewing the Suspension list.

-   Public users are not included.
-   Cancelled tickets do not count towards suspension eligibility.
