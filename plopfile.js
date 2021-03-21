module.exports = function (plop) {
  plop.setGenerator('juce_module', {
    description: 'Scaffold a new juce module',
    prompts: [
      {
        type: 'input',
        name: 'module_name',
        message: "Module name",
        filter: function(txt) {
          return txt.split(' ').join('_');
        },
        validate: function(answer) {
          if (!answer || (answer.length <= 0)) {
            return "Please specify a module name.";
          }
          return true;
        }
      },
      {
        type: 'input',
        name: 'author',
        message: 'Author'
      },
      {
        type: 'input',
        name: 'version',
        message: 'Version',
      },
      {
        type: 'input',
        name: 'class_name',
        message: "Class name (Enter the name of the class this module exports. e.g. MySuperJuceFilter)",
        validate: function(answer) {
          if (!answer || (answer.length <= 0)) {
            return "Please specify a class name.";
          }
          return true;
        }
      },
      {
        type: 'input',
        name: 'dependencies',
        message: 'Dependencies (separate by whitespace)',
        default: 'juce_core',
        filter: function(txt) { return txt.split(" ") }
      },
      {
        type: 'input',
        name: 'license',
        message: 'License',
      },
      {
        type: 'input',
        name: 'module_description',
        message: 'Description',
      }
    ],
    actions: [
      {
        type: 'add',
        path: '{{module_name}}/{{module_name}}.h',
        templateFile: 'plop-templates/custom_module_test.h'
      },
      {
        type: 'add',
        path: '{{module_name}}/{{module_name}}.cpp',
        templateFile: 'plop-templates/custom_module_test.cpp'
      },
      {
        type: 'add',
        path: '{{module_name}}/Source/{{class_name}}.h',
        templateFile: 'plop-templates/Source/Class.h'
      },
      {
        type: 'add',
        path: '{{module_name}}/Source/{{class_name}}.cpp',
        templateFile: 'plop-templates/Source/Class.cpp'
      },

    ]
  });
};
