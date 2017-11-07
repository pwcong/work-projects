<style lang="scss">
$borderWidth: 4px;
$borderWidth-Small: 3px;
$borderWidth-Large: 5px;

.timeline {
  position: relative;

  width: 100%;

  box-sizing: border-box;

  border-left: $borderWidth solid #f5f5f5;

  word-break: break-all;

  &::after {
    content: "";
    position: absolute;
    width: $borderWidth*2;
    height: $borderWidth*2;
    border-radius: 50%;
    background-color: #aaa;

    left: 0;
    top: 50%;
    transform: translate(-75%, -50%);

    transition: background-color 0.2s;
  }

  &:hover::after {
    background-color: #333;
  }
}

.timeline-small {

  &::after {
    width: $borderWidth-Small*2;
    height: $borderWidth-Small*2;
  }
}
.timeline-large {

  &::after {
    width: $borderWidth-Large*2;
    height: $borderWidth-Large*2;
  }
}

.timeline-split {
  
}
</style>
<template>

<div 
    :class="{
        'timeline': true,
        'timeline-small': size === 'small',
        'timeline-large': size === 'large',
        'timeline-split': split
    }"
    :style="{
        padding: padding
    }">
    <slot name="content"></slot>
</div>
  
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      default: "small"
    },
    padding: {
      type: String,
      default: "8px 16px"
    },
    split: {
      type: Boolean,
      default: true
    }
  }
};
</script>
