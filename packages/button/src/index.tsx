import { defineComponent } from 'vue';
import { fooProps } from './types';

const NAME = 'yyg-foo';

export default defineComponent({
  name: NAME,
  props: fooProps,
  setup(props, context) {
    console.log(props, context);
    const onBtnClick = () => {
      console.log('点击按钮测试', props.msg);
    };
    return () => (
      <div class={NAME}>
        <button onClick={onBtnClick}>456</button>
      </div>
    );
  },
});
