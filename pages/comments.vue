<script setup lang="ts">
const toast = useToast()
const { loggedIn, user } = useUserSession()
const { data } = await useFetch('/api/comments')

const otherComments = computed(() => data.value?.comments.filter(c => c.author !== user.value?.username))
const userComment = computed(() => data.value?.comments.find(c => c.author === user.value?.username))
const userCommentBody = ref(userComment.value?.body || '')
const editing = ref(userCommentBody.value === '')
defineOgImageScreenshot()

definePageMeta({
  title: 'Comments',
})
useSeoMeta({
  twitterTitle: 'Rodion Gavrilov | Comments',
  twitterDescription: 'Feel free to leave a comment',
  twitterCard: 'summary',
})

useHead({
  htmlAttrs: {
    lang: 'en',
  },
})

async function saveComment() {
  if (!userCommentBody.value.trim())
    return

  editing.value = false
  await $fetch('/api/comment', {
    method: 'post',
    body: {
      body: userCommentBody.value,
    },
  })
    .then(() => {
      toast.add({
        title: 'Comment saved.',
      })
    })
    .catch((err) => {
      editing.value = true
      toast.add({
        title: 'An error occured',
        description: err.message,
        color: 'red',
      })
    })
}
</script>

<template>
  <UContainer class="mt-8 pb-24">
    <div class="column-1 md:columns-2 lg:columns-3 gap-8 space-y-8 mt-8 pb-24">
      <LandingCard v-if="!loggedIn" :glow="false" class="flex items-center justify-center">
        <template #title>
          <UButton icon="i-simple-icons-github" color="black" to="/auth/github" external>
            Login to comment
          </UButton>
        </template>
      </LandingCard>
      <LandingCard v-else :glow="false" @dblclick="editing = true">
        <UButton
          v-if="!editing" icon="i-heroicons-pencil" color="gray" variant="ghost" class="absolute top-3 right-3"
          @click="editing = true"
        />
        <UTextarea v-if="editing" v-model="userCommentBody" :rows="1" autofocus autoresize @blur="saveComment" />
        <q v-else class="whitespace-pre-line">{{ userCommentBody }}</q>
        <div class="flex items-center gap-2 mt-4">
          <UAvatar :src="`https://github.com/${user.username}.png`" :alt="user.username" size="md" />
          <span class="font-semibold">{{ user.username }}</span>
        </div>
      </LandingCard>
      <LandingCard
        v-for="comment of otherComments"
        :key="comment.id" :glow="false" :to="`https://github.com/${comment.author}`"
        target="_blank"
      >
        <q class="whitespace-pre-line">
          {{ comment.body }}
        </q>
        <div class="flex items-center gap-2 mt-4">
          <UAvatar :src="`https://github.com/${comment.author}.png`" :alt="comment.author" size="md" />
          <div class="font-semibold ">
            {{ comment.author }}
          </div>
        </div>
      </LandingCard>
    </div>
  </UContainer>
</template>
