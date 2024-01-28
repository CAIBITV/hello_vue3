import { customRef } from "vue";

export default function(initValue:string, delay:number) {
  // 需求：想要数据在1s后自动变化
  // 使用 Vue 提供的 customRef 自定义响应式数据
  let timer:number
  // track(跟踪) trigger(触发)
  let msg2 = customRef((track, trigger) => {
    // track：依赖收集
    // trigger：触发更新
    return {
      // get 何时调用? - msg2 被读取时
      get() {
        track()
        return initValue;
      },
      // set 何时调用? - msg2 被修改时
      set(value) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          initValue = value;
          trigger()
        }, delay);
      },
    };
  });

  return { msg2 }
}

