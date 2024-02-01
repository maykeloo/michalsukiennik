<template>
  <div class="bg-blue-400/20 border-blue-400 !border border-solid p-4 rounded-lg">
    <div class="text-blue-400 flex gap-2 font-semibold">
      <Icon name="ri:information-line" size="25" />
      <span>{{ $t('additionalInfo') }}</span>
    </div>
    <ContentSlot />
  </div>
</template>
