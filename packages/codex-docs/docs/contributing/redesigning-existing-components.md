# Redesigning existing components

This page outlines the steps that collaborators should follow to contribute to the redesign of an existing Codex component.

![Designing components](../assets/redesigning-existing-components/designing-components.png)

## 1. Report and validate

### 1.1. Define the purpose and scope of this redesign

The redesign of a component should be clearly justified and scoped. There are several scenarios that can motivate the need to redesign a particular component:

<div class="cdx-docs-col cdx-docs-col-start cdx-docs-col-m">

**1. A new component variant or property is required**

In this scenario, we may need to create a new component variant or property in order to expand the use cases of the original component (e.g. Message component needs to present a close button so users can dismiss it).
</div>
<div class="cdx-docs-col cdx-docs-col-end cdx-docs-col-m" style="margin-bottom: var( --spacing-300 );">

![Redesigning components scenarios 01](../assets/redesigning-existing-components/report-validate-redesigning-components-scenario-01.png)

</div>

<div class="cdx-docs-col cdx-docs-col-start cdx-docs-col-m">

**2. The component’s visual style needs to be updated**

In this scenario, we may need to change the visual style of the component in order to improve it, or to make it consistent with other system elements (e.g. Button paddings need to be decreased).

</div>
<div class="cdx-docs-col cdx-docs-col-end cdx-docs-col-m" style="margin-bottom: var( --spacing-300 );">

![Redesigning components scenarios 02](../assets/redesigning-existing-components/report-validate-redesigning-components-scenario-02.png)
</div>
<div class="cdx-docs-col cdx-docs-col-start cdx-docs-col-m">

**3. The component’s behavior needs to be improved**

We may want to update the component behaviors for well-justified reasons to improve user-experience (e.g. allow the component to grow in height to accommodate longer text).

</div>
<div class="cdx-docs-col cdx-docs-col-end cdx-docs-col-m">

![Redesigning components scenarios 03](../assets/redesigning-existing-components/report-validate-redesigning-components-scenario-03.png)
</div>

### 1.2. Create a new Phabricator task

Once the purpose of the component redesign has been defined, a new Phabricator task will need to be created. Use this [component task template][component-task-template] to create the new ticket. Fill in as much information as possible in the predefined sections.

### 1.3. Review the task with the Design System Team

The new task must be reviewed with the Design System Team (DST) before the design process starts. This will generate understanding of the new use case and effectively validate that this component update is needed. Make sure to add the [Design-System-Team](https://phabricator.wikimedia.org/project/profile/5858/) project tag in the task for visibility. You can also post a comment once the task has been created and ping the DST members to start the conversation.

Once the task is validated with the DST and the need to update the component is clear, you can start designing the updated system component.

## 2. Research and prepare

The designer should start by checking the following resources in order to collect relevant information about the existing component and its current use cases:

- [Codex component demos](../components/overview.md) and [Codex Figma library](https://www.figma.com/file/KoDuJMadWBXtsOtzGS4134/%E2%9D%96-Codex-components?node-id=1891%3A4420): check the current component behaviors and interactions.
- [Wikimedia web products](https://www.wikimedia.org/): detect current use cases of the component in the different Wikimedia products

Designers should start by analyzing the current component in production and collecting relevant current use cases. This initial inventory-like process will allow designers to understand the component, and to make sure that the new version matches existing production patterns.

Designers should also compare components of the same category or elements with shared characteristics that can influence the design direction.

## 3. Redesign the component

### 3.1. Create a new exploration file

Create a new Figma file to explore the different proposals and versions of the component, so you can share them in the Phabricator task. You can duplicate this [component exploration template](https://www.figma.com/file/6hNSvvL4CoyfemXECihJD5/Exploration-File-(Template)?node-id=1%3A3627) to create your own file. You can also find the existing component in [this Figma folder](https://www.figma.com/files/project/44938429) and create a new version's tab with the component's updates.

![A new exploration file in Figma.](../assets/designing-new-components/design-component-create-exploration-file.png)

The following information will be included in the design exploration file:

- **Cover:** contains a title, description, Phabricator task link and the task owner.
- **Inventory:** collect and analyze the real use cases where the new component is needed.
- **Explorations** (optional): explore component options if needed before starting documentation in the Figma spec.
- **Component specifications**: document the component's specifications, including visual guides and component behaviors. You can duplicate this [specification sheet template](https://www.figma.com/design/6hNSvvL4CoyfemXECihJD5/Component-spec-sheet-(exploration-file-template)?node-id=0-1&node-type=canvas&viewport=532%2C205%2C0.12&t=6aeK0NforFCOpMQ0-0) to document the component. Save all versions of the component on separate tabs, labeling each with the version (e.g. “v1”), date (e.g. “2022-07-17”), and an icon to indicate its status: final version (✅), archived (📁), or WIP (🛠).

### 3.2. Defining visual styles and interaction

The research phase should allow designers to identify the component’s behavior and its building blocks. The information collected during that period should then be used to support the redefinition of the missing visual and interactive characteristics of said component.

#### Defining the component’s building blocks

It is essential to identify the component’s architecture before diving deeper into defining its new style and functionality. What are the building blocks or smaller elements that build up the component? Are these smaller elements components too? The answer to these questions can generate three scenarios:

<div class="cdx-docs-col cdx-docs-col-start cdx-docs-col-m">

1. The component we are redesigning is not built as a composite of different components (e.g. Button), so we’ll update a single element.
</div>
<div class="cdx-docs-col cdx-docs-col-end cdx-docs-col-m">

![Redesign component scenario 01](../assets/redesigning-existing-components/redesign-component-component-scenario-01.png)
</div>
<div class="cdx-docs-col cdx-docs-col-start cdx-docs-col-m">

2. The component we are redesigning is built as a composite of different components that already exist (e.g. Combobox, which combines an input and a button). So we’ll consider how the changes affect each one of the component’s building blocks.
</div>
<div class="cdx-docs-col cdx-docs-col-end cdx-docs-col-m">

![Redesign component scenario 02](../assets/redesigning-existing-components/redesign-component-component-scenario-02.png)
</div>
<div class="cdx-docs-col cdx-docs-col-start cdx-docs-col-m">

3. The component we are redesigning is built as a composite of different components and **one or more don’t exist** (e.g. Combobox, which combines an input and a button that already exist but needs the menu items to select one option in the dropdown menu).
</div>
<div class="cdx-docs-col cdx-docs-col-end cdx-docs-col-m">

![Redesign component scenario 03](../assets/redesigning-existing-components/redesign-component-component-scenario-03.png)
</div>

::: warning
This scenario will require you to follow the same design process outlined in the [“Designing new components”](./designing-new-components.md) section to **create each one of the missing components**. Each new Codex component will require a **dedicated component task** and will have its own design specification sheet.
:::

#### Defining the component’s visual style

All system components should follow the visual guidelines defined in our [style guide](../style-guide/overview.html), as reflected by our design tokens, and use system iconography.

::: warning
You have to enable the [Codex Figma library](https://www.figma.com/design/KoDuJMadWBXtsOtzGS4134/Codex?node-id=1891-4420&node-type=canvas&t=plW1hmguHVWs3fWZ-11) in your Figma file to reuse Codex’s styles and icons. Learn more about [how to enable Figma libraries](https://help.figma.com/hc/en-us/articles/360038743434#access).
:::

Design tokens can help support the visual definition of components, as they represent pre-made, systematic stylistic decisions applied to specific properties. While designing new system components, keep in mind to reuse the Codex tokens created in Figma as styles and variables. If you need to use a token that is not documented yet, or you need to apply it in a different context of use, please notify the Design System Team.

Furthermore, components will need to consume only system assets:

- If you need to use iconography in your designs, use a [system icon](https://www.figma.com/design/KoDuJMadWBXtsOtzGS4134/Codex?node-id=20598-51338&node-type=canvas&t=plW1hmguHVWs3fWZ-11). If you need to use an icon that does not exist in our shared library yet, you can contribute the design of a new icon. Learn how to do this in the [Designing icons](./designing-icons.md) section.
- If you need to use a Wikimedia logo, please use one from our [logo assets](https://www.figma.com/design/KoDuJMadWBXtsOtzGS4134/Codex?node-id=20598-51478&node-type=canvas&t=plW1hmguHVWs3fWZ-11).
- If you need to use an illustration, please use one from our [illustration assets](https://www.figma.com/design/KoDuJMadWBXtsOtzGS4134/Codex?node-id=20598-51408&node-type=canvas&t=plW1hmguHVWs3fWZ-11) or create one with the same styles.

#### Defining the component's interaction

In order to provide a consistent experience, the component’s (new) behavior and interactive states should also follow the system’s design principles and patterns specified in the [Codex Figma library](https://www.figma.com/file/KoDuJMadWBXtsOtzGS4134/%E2%9D%96-Codex-components?node-id=1891%3A4420https://www.figma.com/file/KoDuJMadWBXtsOtzGS4134/%E2%9D%96-Codex-components?node-id=1891%3A4420).

When applying design changes to components, remember to:

- Consider **internationalization** needs and make sure that the component remains optimized for the different languages and orientations. Refer to the [Bidirectionality guidelines](../style-guide/bidirectionality.md) for more details.
- Make sure to define the **responsive behavior** of the new version of the component, and to provide examples of its adaptation to different devices/ screen sizes. You should define the component for desktop, tablet landscape, tablet portrait and mobile.
- Research and follow **accessibility** best practices that apply to the typology of the component being defined, and provide keyboard navigation specifications if needed for this new version. Read more about [accessibility principles and resources](../style-guide/accessibility.md).

### 3.3. Redesign the main component in Figma

Once the new visual and/or interactive traits of the component are well defined, you’ll be ready to redesign the [main component](https://help.figma.com/hc/en-us/articles/360038662654-Guide-to-components-in-Figma) in the Figma exploration file. This will make it possible for other designers to reuse the new version of the component in different Figma projects.

Depending on the scope of the change, you might need to:

- Create the [Figma variants](https://help.figma.com/hc/en-us/articles/360056440594-Create-and-use-variants): to represent new potential states (default, hover, focus, disabled…) of the component in all platforms (desktop, mobile).
- Define new [component properties](https://help.figma.com/hc/en-us/articles/5579474826519-Create-and-use-component-properties) (these apply to all variants) so the designers can customize the variant and showcase new elements or functionality (e.g. an icon, a new close button), to adjust the component to their use case.
- Apply the right [auto layout](https://help.figma.com/hc/en-us/articles/5731482952599-Using-auto-layout) properties to make sure the component keeps displaying the right resizing behavior and maintains the correct spacing whenever its contents are modified.
- If needed, apply [constraints](https://help.figma.com/hc/en-us/articles/360039957734-Apply-constraints-to-define-how-layers-resize) to define how the component will behave when resized.

Figma provides extensive [resources](https://help.figma.com/hc/en-us) that will help you create flexible and robust components that are reliable and comfortable to reuse by the rest of the design team members. Count on the Design System Team to support you at any step of the process if you find any obstacles working with Figma.

### 3.4. Create the component’s specification sheet

Once the component’s visual style and interactive behavior have been defined in the main component, the component specification sheet will need to be documented. This spec sheet will serve as the foundation for the component's documentation and guide developers in implementing the component updates. You can use this [component specification sheet template](https://www.figma.com/file/6hNSvvL4CoyfemXECihJD5/Component-spec-sheet-(exploration-file-template)?node-id=501%3A22874) or find the existing component in [this Figma folder](https://www.figma.com/files/project/44938429) to create a new version's tab with the component's updates.

![Specification sheet template in Figma.](../assets/designing-new-components/design-component-figma-spec.png)

The component specification sheet needs to contain the following sections:

1. **Guides:** This section will document the component’s specifications by including any relevant info for developers, such as paddings, sizes, tokens used, or any component used to create this component.
2. **When to use the component (e.g. "When to use accordions"):** Focus on explaining the primary characteristics of the component, detailing when and when not to use it. This section aims to guide users in making informed decisions about using the component within their projects.
3. **Specifications:** Define the component's anatomy using an image with arrows and numerical labels for each one of the component’s elements. The corresponding text will provide detailed explanations for each numbered element in the image, specifying which of those elements are optional and can be hidden within the component. Additionally, outline the component's minimum and maximum requirements, detailing length or element count constraints. Conclude this section with a link to the Figma spec sheet in the library.
4. **Component limitations:** This section will include the minimum and maximum requirements for this component, detailing length or element count constraints.
5. **Bidirectionality:** This section will document how the component will be mirrored for both LTR and RTL. Refer to the Bidirectionality guidelines for more information.
6. **Types** (if needed): Provide details for the different properties or variants of the component, accompanied by clear images representing each one. This section is applicable only to components offering custom properties or various variants.
7. **Interaction states:** Create an image illustrating all interaction states of the component, with each state numbered. A corresponding numbered list will be included below the image, providing names for each state. This section applies only to components with interactive states.
8. **Best practices:** Offer guidance on optimal usage for each component, including both do and don't images with practical examples. Illustrate how users might use the different component variants and properties effectively, and explain how the component can interact with other system elements like icons, colors, or other components.
9. **Content** (if needed): If the new component requires guidelines for content, such as recommended character count or writing recommendations, this section will provide clear instructions to do so. You can include Do and Don’t images for each recommendation.
10. **Keyboard navigation** (if needed): Incorporate keyboard navigation into a table, detailing the keys for interacting with the component via keyboard. This section will clarify how users can navigate the component using various keyboard shortcuts, and it applies only to components with interactive states.

::: info
Make sure the Figma exploration file is within the [Explorations (WIP)](https://www.figma.com/files/1052664678635144083/project/44938429/Explorations-(WIP)?fuid=1291385767832101845) project in Figma. If you have not already been invited to this project, please request access from a Design System team designer.
:::

### 3.5. Evaluate and iterate

#### Collecting design feedback

Throughout the component design process, it is important to incorporate feedback from Wikimedia’s UX designers, specially from system designers, who will also grant final explicit approval on their proposed design and its specification before moving into the hand-off to development step.

Once the component’s specification sheet has been updated in the design exploration file, it should be shared in the Phabricator task in order to collect feedback from the Design System Team, other designers, and community members.

The component redesign proposal will be discussed in Phabricator, and it will be iterated on if needed. All the open questions listed in the task and subsequent possible discussions will need to be solved before the component’s design process can be considered done.

::: warning
No component updates or variants can be added to the system without being validated by the Design System Team first. The component designs will need to be reviewed with help from a system designer from the core team. Post a comment in the Phabricator task and ping them there so they can review the component and track the task.
:::

#### Collecting feedback from users

You can assess the need to test the new version of the component with help from users using your preferred methodology. This will validate to which degree the new behavior and features meet their expectations, and whether it supports them to accomplish the intended task.

A general recommendation is to test components in a realistic context that simulates the component’s most common interaction conditions: in combination with other components (e.g. test input fields in a form set up, create a search scenario to test search fields, etc.).

## 4. Update the guidelines

As some parts of the component are being redesigned, it is necessary to update the existing component’s guidelines to reflect the changes. You can duplicate this [Google Doc template](https://docs.google.com/document/d/1oVTtBk7ShOKj80dz3CYsd09sC9gBbfpbJ8M_E1zdm6c/edit#heading=h.a76x583bwhh3) to document the component’s guidelines.

![Google Doc template to document the component's guidelines.](../assets/designing-new-components/design-component-guidelines.png)

Follow the sections outlined in the template to structure the guidelines, which will be added to the component's page on the Codex site. You can use the frames designed in the Figma spec sheet as images to illustrate these guidelines.

::: info
Make sure the Google Doc with the component's guidelines is moved to this [Component Guidelines](https://drive.google.com/drive/u/1/folders/1TMPY6YJzwUUO0vXaIpiEVoImsNeEiDRC) folder in Google Drive. If you don’t have access to this folder, please request it from a Design System designer.
:::

## 5. Hand-off to development

Once the component’s new design has been discussed, iterated on (if needed) and finished, the designer will share the link to the final version of the design specification sheet in the relevant component Phabricator task, so developers can start implementing the component in Codex.

The following actions are required:

1. **Link the design specification in the task:** the designer will add the link to the exploration file with the design specification sheet in the description of the Phabricator task.
2. **Explain the proposal and list what’s being updated:** the designer will explain the proposal in the task description and will clearly list all the things we are updating in this new version of the existing component. It’s important that developers know exactly what is changing in order to save time (e.g. if Button paddings are being updated, list all the paddings and values in the task).
3. **Post a comment:** in addition to link the specification sheet, the designer will post a comment explaining that the task is ready to be implemented, pinging the developer in that comment if possible.
4. **Move task in the board:** the designer will move the task to the next relevant column in the board to indicate that the component can be implemented in Codex.
5. **Complete the design checklist:** the designer will complete the design checklist in the “Acceptance criteria” section in the task description to indicate which steps in the task were already completed.

We recommend reviewing the component’s interactive and visual specifications with the help from the developers that will tackle its implementation as part of the hand-off step.

Engineers can help detect edge cases and identify potential technological constraints that should be considered during the design process.

## 6. Design sign-off

Once the component has been fully implemented in Codex, developers will assign the task to the component’s designer (and move the task to the corresponding column if existent) to perform a complete design review of the component.

The component will need to be tested against all its visual and functional specifications: states, properties, minimum and maximum examples, responsiveness, LTR and RTL, etc.

Once the design sign-off has been done, the designer will assign it to QTE and move it to the corresponding QTE sign-off column, so quality assurance testing can be performed as a final check before release.

::: info
Designers will be able to check how components are coming along during the implementation process by accessing the Codex demo page staged in Netlify. Developers can provide links to the relevant Netlify build for you to provide feedback.
:::

## 7. Document: Add the updated component to the Codex Figma library

Once the new version of the component has been implemented and signed-off, it will be ready to be updated in the [Codex Figma library](https://www.figma.com/file/KoDuJMadWBXtsOtzGS4134/%E2%9D%96-Codex-components) so that it can be reused in the different design projects.

::: info
In order to avoid problems with our Figma library, designers from the Design System Team will be responsible for adding the updated version of a component to the library and for publishing it. Please ping them in the Phabricator task once the design exploration file is ready, so they can add the component in the Figma library.
:::

[component-task-template]: https://phabricator.wikimedia.org/maniphest/task/edit/form/1/?title=Update%20%5BComponentName%5D%20component%20in%20Codex&description=%23%23%20Background%0D%0A%0D%0ANOTE%3A%20%2F%2FWhen%20creating%20a%20component%20task%2C%20please%20try%20to%20fill%20out%20the%20entire%20Background%20section.%20The%20rest%20of%20the%20task%20description%20can%20be%20populated%20later.%2F%2F%0D%0A%0D%0A-%20**Description%3A**%20%2F%2Fadd%20a%20brief%20description%20of%20this%20component%2F%2F%0D%0A-%20**History%3A**%20%2F%2Fdescribe%20or%20link%20to%20prior%20discussions%20related%20to%20this%20component%2F%2F%0D%0A-%20**Known%20use%20case(s)%3A**%20%2F%2Fdescribe%20known%20use%20cases%20for%20this%20component%2C%20including%20the%20project%2C%20team%2C%20and%20timeline%2F%2F%0D%0A-%20**Considerations%3A**%20%2F%2Flist%20any%20known%20challenges%20or%20blockers%2C%20or%20any%20other%20important%20information%2F%2F%0D%0A%0D%0A%23%23%23%20User%20stories%0D%0A%0D%0A%2F%2Fadd%20at%20least%20one%20user%20story%2F%2F%0D%0A%0D%0A%23%23%23%20Previous%20implementations%0D%0A%0D%0A-%20**Codex%20demo%3A**%20%2F%2Fadd%20%5B%5B%20https%3A%2F%2Fdoc.wikimedia.org%2Fcodex%2Fmain%2Fcomponents%2Foverview.html%20%7C%20Codex%20demo%20%5D%5D%20current%20component%20link%2F%2F%0D%0A-%20**OOUI%3A**%20%2F%2Fadd%20the%20relevant%20OOUI%20widget%20name%20here%2C%20if%20applicable.%20See%20%5B%5B%20https%3A%2F%2Fdoc.wikimedia.org%2Foojs-ui%2Fmaster%2Fdemos%2F%3Fpage%3Dwidgets%26theme%3Dwikimediaui%26direction%3Dltr%26platform%3Ddesktop%20%7C%20OOUI%20demos%20%5D%5D.%2F%2F%0D%0A-%20**Vue%3A**%20%2F%2Fadd%20any%20existing%20Vue%20implementations%2C%20if%20applicable.%20See%20%5B%5B%20https%3A%2F%2Fphabricator.wikimedia.org%2FT272885%20%7C%20Vue%20component%20inventory%20%5D%5D.%2F%2F%0D%0A%0D%0A%23%23%23%20Design%20spec%0D%0A%0D%0A%2F%2F%20Once%20a%20component%20spec%20sheet%20has%20been%20created%20in%20Figma%2C%20remove%20the%20note%20stating%20that%20the%20spec%20is%20missing%20and%20link%20to%20the%20spec%20below.%20%2F%2F%0D%0A%0D%0A%7C%20Component%20spec%20sheet%20%7C%0D%0A%0D%0A%23%23%23%20Guidelines%0D%0A%0D%0A%2F%2F%20Designer%20should%20provide%20the%20guidelines%20and%20associated%20images%20for%20this%20component.%20Once%20the%20guidelines%20have%20been%20documented%2C%20please%20remove%20this%20note%20and%20share%20a%20link%20to%20the%20guidelines%20below.%20%2F%2F%0D%0A%0D%0A%7C%20Doc%20with%20the%20guidelines%20%7C%20Images%20%7C%0D%0A%0D%0A%23%23%23%20Open%20questions%0D%0A%0D%0A%2F%2F%20Add%20here%20the%20questions%20to%20be%20answered%20in%20order%20to%20design%20and%20implement%20the%20component%20%2F%2F%0D%0A%0D%0A%23%23%23%20Acceptance%20criteria%20(or%20Done)%0D%0A%0D%0A**Design**%0D%0A-%20%5B%5D%20%5B%5B%20https%3A%2F%2Fdoc.wikimedia.org%2Fcodex%2Flatest%2Fcontributing%2Fdesigning-new-components.html%23_3-design-the-component%20%7C%20Design%20the%20Figma%20spec%20sheet%20%5D%5D%20and%20include%20its%20link%20in%20this%20task%3A%0D%0A%20%20%20-%20%5B%5D%20Make%20sure%20the%20Figma%20component%20is%20designed%20with%20all%20the%20required%20states%2C%20properties%2C%20and%20variants%2C%20including%20the%20%5B%5B%20https%3A%2F%2Fdoc.wikimedia.org%2Fcodex%2Flatest%2Fcontributing%2Fdesigning-new-components.html%23text-directionality-behavior%20%7C%20LTR%20and%20RTL%20%5D%5D%20versions%0D%0A%20%20%20-%20%5B%5D%20Make%20sure%20all%20colors%20used%20in%20the%20component%20follows%20the%20%5B%5B%20https%3A%2F%2Fwww.w3.org%2FWAI%2FWCAG21%2FUnderstanding%2Fcontrast-minimum.html%20%7C%20minimum%20required%20contrast%20%5D%5D%20to%20be%20accessible%0D%0A%20%20%20-%20%5B%5D%20Provide%20a%20thorough%20explanation%20of%20the%20component%27s%20behavior%20in%20the%20spec%20sheet%2C%20including%20all%20relevant%20specifications%2C%20maximum%20examples%2C%20and%20usage%20recommendations%0D%0A%20%20%20-%20%5B%5D%20Include%20a%20list%20of%20keyboard%20shortcuts%20to%20navigate%20the%20component%20%2F%2F(keyboard%20navigation%20table)%2F%2F%0D%0A-%20%5B%5D%20Update%20the%20component%27s%20guidelines%20and%20provide%20the%20link%20to%20the%20doc%20and%20its%20images%20in%20this%20task.%0D%0A-%20%5B%5D%20Update%20the%20main%20component%20in%20the%20%5BFigma%20library%5D(https%3A%2F%2Fwww.figma.com%2Ffile%2FKoDuJMadWBXtsOtzGS4134%2F%25E2%259D%2596-Codex-components%3Fnode-id%3D1891%253A4420%26viewport%3D287%252C338%252C0.28).%20%2F%2FThis%20step%20will%20be%20done%20by%20a%20DST%20member.%2F%2F%0D%0A%0D%0A**Code**%0D%0A%5B%5D%20Implement%20the%20component%20changes%20in%20Codex%0D%0A%5B%5D%20Update%20the%20guidelines%20in%20the%20component%27s%20page&projects=Codex%2C%20Design-Systems-Team
