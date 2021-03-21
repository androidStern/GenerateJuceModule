#pragma once

#if 0

     BEGIN_JUCE_MODULE_DECLARATION

      ID:               {{module_name}}
      vendor:           {{author}}
      version:          {{version}}
      name:             {{module_name}}
      description:      {{module_description}}
      license:          {{license}}
      dependencies:     {{#each dependencies}}{{this}} {{/each}}

     END_JUCE_MODULE_DECLARATION

#endif

{{#each dependencies}}
#include <{{this}}/{{this}}.h>
{{/each}}

#include "Source/{{class_name}}.h"

