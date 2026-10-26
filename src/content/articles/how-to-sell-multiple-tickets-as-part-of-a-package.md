---
title: "How to Sell Multiple Tickets as Part of a Package"
summary: "BAFTA Events provides a range of sophisticated tools that can be utilised by Admins to manage and sell tickets."
category: tickets
order: 100
date: 2024-08-23
updated: 2026-07-15
status: published
wordpress_id: 1281
---

BAFTA Events provides a range of sophisticated tools that can be utilised by Admins to manage and sell tickets. Admins can set rules to define the quantity and types of Tickets available for each User Type. While tickets are typically sold individually, there are occasions where Admins may wish to offer a package of tickets—for example, selling a full table of 10 tickets at an Awards ceremony. There may also be scenarios where selling multiple tickets together offers users a reduced price compared to purchasing individual tickets. This guide details the process of creating and selling ticket packages, with references to additional guides that explain event setup and functionality in more detail. These guides will primarily focus on the sale of individual tickets.

When creating ticket packages, there are several important considerations for Admins:

-   **Single Ticket Type:** Ticket packages can only include one type of ticket.
-   **Pricing:** The price for a ticket package is defined for and applied to the entire package.
-   **Cancellation Policy:** Neither Bookers nor Admins can cancel individual tickets within a package; the entire package must be cancelled, which will cancel all tickets included in it.
-   **Bolt-On Tickets:** It is possible to use ticket packages to trigger additional ticket options. For example, if a user purchases a ticket package, they could have the option to buy two additional tickets at a different price to create a table of 12.

## How to Create Ticket Packages

Ticket Packages are created in the same section where Ticket Types are defined. Before creating a Ticket Package, a Ticket Type must be created first. Packages are composed of multiples of a single Ticket Type that has already been established. For more detailed information on creating ticket types and their use in BAFTA Events, please refer to the [guide](/help-articles/how-to-manage-ticket-types/).

1.  Log into the **Admin Interface**.
2.  Make sure the intended **Branch** is selected from the dropdown menu at the top-left of the page.
3.  Go to **Control Centre>Ticket Types**.
4.  Click on **Add**.
5.  Provide the **Internal** and **Public** names and a **Description** which will appear on the booking UI.
6.  Set **Ticket Package** to **Yes**.
7.  Click **Save** and more UI will appear.
8.  Select the Ticket Type that will be used for package from the **Package Ticket Ticket Type Package** dropdown.
9.  Specify the **Number of Tickets**.
10.  Click **Save**.

## How Ticket Packages are Used in Events

Ticket Packages are used in Events in the same way as Ticket Types. In the Ticket Rules table on the Event Settings page, packages are selected and allowances set just like Ticket Types. The key difference is when setting the number of packages that can be booked is that the specified number applies to the number of packages, not the total number of tickets within those packages. For example, setting the quantity to 10 for a ticket type allows the booker to select 10 individual tickets. Setting it to 10 for a ticket package containing 10 tickets would allow the booker to select 10 ticket packages, equating to 100 tickets.

Another crucial aspect of Event setup is setting the Prices. Note that the price set is for all the tickets within the package, not for individual tickets as described in the setup guide. This full price will always be displayed on all relevant screens. On the Invoice, only the package will be listed, not the number of tickets sold. It is important to always enter the full package price.

For comprehensive information about setting up events, please review the [Event Set-up guide](/help-articles/how-to-create-a-standard-event/).
