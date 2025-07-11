// src/admin/app.tsx
import {
  Alignment,
  Autoformat,
  AutoImage,
  BalloonToolbar,
  BlockQuote,
  Bold,
  Code,
  CodeBlock,
  Essentials,
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
  GeneralHtmlSupport,
  Heading,
  HorizontalLine,
  HtmlEmbed,
  Image,
  ImageCaption,
  ImageInsert,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Indent,
  IndentBlock,
  Italic,
  List,
  ListProperties,
  Link,
  LinkImage,
  MediaEmbed,
  Paragraph,
  PageBreak,
  PasteFromOffice,
  PictureEditing,
  RemoveFormat,
  SourceEditing,
  SpecialCharacters,
  SpecialCharactersEssentials,
  Strikethrough,
  Style,
  Subscript,
  Superscript,
  ShowBlocks,
  Table,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar,
  TodoList,
  Underline,
  WordCount,
  IconIndent,
} from "ckeditor5";

import {
  type PluginConfig,
  type Preset,
  setPluginConfig,
  StrapiMediaLib,
  StrapiUploadAdapter,
} from "@_sh/strapi-plugin-ckeditor";
import { StrapiApp } from "@strapi/strapi/admin";

const myCustomPreset: Preset = {
  name: "nqbral-games-preset",
  description: "Nqbral Games Preset HTML",
  editorConfig: {
    licenseKey: "GPL",
    plugins: [
      Alignment,
      Autoformat,
      AutoImage,
      BalloonToolbar,
      BlockQuote,
      Bold,
      Code,
      CodeBlock,
      Essentials,
      FontBackgroundColor,
      FontColor,
      FontFamily,
      FontSize,
      GeneralHtmlSupport,
      Heading,
      HorizontalLine,
      HtmlEmbed,
      Image,
      ImageCaption,
      ImageInsert,
      ImageStyle,
      ImageToolbar,
      ImageUpload,
      Indent,
      IndentBlock,
      Italic,
      List,
      ListProperties,
      Link,
      LinkImage,
      MediaEmbed,
      Paragraph,
      PageBreak,
      PasteFromOffice,
      PictureEditing,
      RemoveFormat,
      SourceEditing,
      SpecialCharacters,
      SpecialCharactersEssentials,
      Strikethrough,
      Style,
      Subscript,
      Superscript,
      ShowBlocks,
      Table,
      TableCaption,
      TableCellProperties,
      TableColumnResize,
      TableProperties,
      TableToolbar,
      TodoList,
      Underline,
      WordCount,
      StrapiMediaLib,
      StrapiUploadAdapter,
    ],
    toolbar: [
      "showBlocks",
      "|",
      "heading",
      "|",
      "fontSize",
      "fontFamily",
      "alignment",
      {
        label: "Indentation",
        icon: IconIndent,
        items: ["outdent", "indent"],
      },
      "bulletedList",
      "numberedList",
      "todoList",
      "link",
      "mediaEmbed",
      "insertImage",
      "strapiMediaLib",
      "blockquote",
      "insertTable",
      "codeBlock",
      "htmlEmbed",
      "SourceEditing",
      "specialCharacters",
      "horizontalLine",
      "pageBreak",
      "|",
      "undo",
      "redo",
    ],
    balloonToolbar: [
      "bold",
      "italic",
      "fontColor",
      "fontBackgroundColor",
      {
        label: "Other formatting options",
        icon: `
      <svg width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" fill="none" width="24" height="24"/>
      <g>
      <path d="M14.348 12H21v2h-4.613c.24.515.368 1.094.368 1.748 0 1.317-.474 2.355-1.423 3.114-.947.76-2.266 1.138-3.956 1.138-1.557 0-2.934-.293-4.132-.878v-2.874c.985.44 1.818.75 2.5.928.682.18 1.306.27 1.872.27.68 0 1.2-.13 1.562-.39.363-.26.545-.644.545-1.158 0-.285-.08-.54-.24-.763-.16-.222-.394-.437-.704-.643-.18-.12-.483-.287-.88-.49H3v-2H14.347zm-3.528-2c-.073-.077-.143-.155-.193-.235-.126-.202-.19-.44-.19-.713 0-.44.157-.795.47-1.068.313-.273.762-.41 1.348-.41.492 0 .993.064 1.502.19.51.127 1.153.35 1.93.67l1-2.405c-.753-.327-1.473-.58-2.16-.76-.69-.18-1.414-.27-2.173-.27-1.544 0-2.753.37-3.628 1.108-.874.738-1.312 1.753-1.312 3.044 0 .302.036.58.088.848h3.318z"/>
      </g>
      </svg>`,
        items: ["underline", "strikethrough", "superscript", "subscript"],
      },
      "|",
      "removeFormat",
    ],
    fontFamily: {
      supportAllValues: true,
    },
    fontSize: {
      options: [10, 12, 14, "default", 18, 20, 22],
      supportAllValues: true,
    },
    heading: {
      options: [
        {
          model: "paragraph",
          title: "Paragraph",
          class: "ck-heading_paragraph",
        },
        {
          model: "heading1",
          view: "h1",
          title: "Heading 1",
          class: "ck-heading_heading1",
        },
        {
          model: "heading2",
          view: "h2",
          title: "Heading 2",
          class: "ck-heading_heading2",
        },
        {
          model: "heading3",
          view: "h3",
          title: "Heading 3",
          class: "ck-heading_heading3",
        },
        {
          model: "heading4",
          view: "h4",
          title: "Heading 4",
          class: "ck-heading_heading4",
        },
        {
          model: "heading5",
          view: "h5",
          title: "Heading 5",
          class: "ck-heading_heading5",
        },
        {
          model: "heading6",
          view: "h6",
          title: "Heading 6",
          class: "ck-heading_heading6",
        },
      ],
    },
    htmlSupport: {
      allow: [
        {
          name: /.*/,
          attributes: true,
          classes: true,
          styles: true,
        },
      ],
      disallow: [
        {
          attributes: [
            { key: /^on(.*)/i, value: true },
            {
              key: /.*/,
              value: /(\b)(on\S+)(\s*)=|javascript:|(<\s*)(\/*)script/i,
            },
            { key: /.*/, value: /data:(?!image\/(png|jpeg|gif|webp))/i },
          ],
        },
        { name: "script" },
      ],
    },
    list: {
      properties: {
        styles: true,
        startIndex: true,
        reversed: true,
      },
    },
    table: {
      contentToolbar: [
        "tableColumn",
        "tableRow",
        "mergeTableCells",
        "tableProperties",
        "tableCellProperties",
        "toggleTableCaption",
      ],
    },
    image: {
      styles: {
        options: [
          {
            name: "small",
            title: "Petite image",
            icon: `
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="5" width="6" height="10" fill="#444"/>
                <rect x="10" y="5" width="8" height="10" fill="#CCC"/>
            </svg>
            `,
            className: "mx-auto block small-image",
            modelElements: ["imageBlock", "imageInline"],
          },

          // Image moyenne
          {
            name: "medium",
            title: "Image moyenne",
            icon: `
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="5" width="12" height="10" fill="#666"/>
                <rect x="2" y="5" width="2" height="10" fill="#CCC"/>
                <rect x="16" y="5" width="2" height="10" fill="#CCC"/>
            </svg>
            `,
            className: "mx-auto block medium-image",
            modelElements: ["imageBlock", "imageInline"],
          },

          // Image pleine largeur
          {
            name: "full",
            title: "Image pleine",
            icon: `
            <svg width="20" height="20" viewBox="0 0 20 20" fill="#444" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="5" width="16" height="10" fill="#444"/>
            </svg>
            `,
            className: "mx-auto block w-full",
            modelElements: ["imageBlock", "imageInline"],
          },
        ],
      },
      toolbar: [
        "imageTextAlternative",
        "|",
        "imageStyle:small",
        "imageStyle:medium",
        "imageStyle:full",
      ],
    },
    link: {
      decorators: {
        toggleDownloadable: {
          mode: "manual",
          label: "Downloadable",
          attributes: {
            download: "file",
          },
        },
      },
      addTargetToExternalLinks: true,
      defaultProtocol: "https://",
    },
    ui: {
      poweredBy: {
        position: "inside",
        side: "left",
        label: "",
        verticalOffset: 0,
        horizontalOffset: 0,
      },
    },
  },
};

const myConfig: PluginConfig = {
  /**
   * Note that since provided `presets` includes only `myCustomPreset`
   * this configuration will overwrite default presets.
   */
  presets: [myCustomPreset],
};

export default {
  register() {
    setPluginConfig(myConfig);
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
