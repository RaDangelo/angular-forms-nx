// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { TemplateDrivenFormComponent } from './template-driven-form.component';

export default {
    title: 'Template Driven Component',
    component: TemplateDrivenFormComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

// const Template: Story<Button> = (args: Button) => ({
//     component: Button,
//     props: args,
// });


