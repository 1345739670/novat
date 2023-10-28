import type { ExtractPropTypes } from 'vue';

export const fooProps = {
  msg: {
    type: String,
    required: false,
    default: '',
  },
};

// 这个 vant 是放到 button.tsx ，之后可以考虑下换位置
export type FooProps = ExtractPropTypes<typeof fooProps>;
