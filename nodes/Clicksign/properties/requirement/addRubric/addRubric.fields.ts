import { INodeProperties } from 'n8n-workflow';

import { addRequirementFields } from '../shared/addRequirement/addRequirement.fields';

export const addRubricFields: INodeProperties[] = [
  ...addRequirementFields('addRubric'),
  {
    displayName: 'Rubric field',
    name: 'rubric_field',
    type: 'string',
    default: '',
    required: false,
    displayOptions: {
      show: {
        operation: ['addRubric'],
        resource: ['requirement'],
      },
    },
  },
  {
    displayName: 'Pages',
    name: 'pages',
    type: 'string',
    default: '',
    required: true,
    description:
      "Inform the pages that will receive the signatory's initials, separated by a comma",
    displayOptions: {
      show: {
        operation: ['addRubric'],
        resource: ['requirement'],
      },
    },
  },
];
