// deno-lint-ignore-file require-await
import {
  FSStructure,
  Template,
} from "/Users/pkedy/go/src/github.com/apexlang/apex/src/config.ts";

const template: Template = {
  info: {
    name: "@iota/tinygo",
    description: "TinyGo Iota",
    variables: [
      {
        name: "module",
        description: "The module name",
        type: "input",
        prompt:
          "Please enter the module name (e.g. github.com/myorg/myservice)",
        default: "github.com/myorg/myservice",
      },
      {
        name: "package",
        description: "The main package name",
        type: "input",
        prompt: "Please enter the main package name (e.g. myservice)",
        default: "myservice",
      },
    ],
  },

  async process(_vars): Promise<FSStructure> {
    return {
      files: [
        ".vscode/extensions.json",
        ".vscode/settings.json",
        ".vscode/tasks.json",
        "apex.axdl",
      ],
      templates: {
        "tmpl": [
          "apex.yaml.tmpl",
          "go.mod.tmpl",
        ],
      },
    };
  },
};

export default template;
