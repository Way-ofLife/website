<template>
  <div>
    <v-row>
      <v-col>
        <h1
          class="text-h4"
        >
          お問い合わせ
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <v-card>
          <v-card-title>メールから</v-card-title>
          <v-card-subtitle>お問い合わせ全般に対応いたします。</v-card-subtitle>
          <v-card-text>
            <p>
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <v-card>
          <v-card-title>SNSから</v-card-title>
          <v-card-subtitle>ポップなトーンで対応します！</v-card-subtitle>
          <v-card-text>
            <ul>
              <li>簡単にご用件をお伝えください。担当の者に確認いたします。</li>
              <li>返信が滞ってしまう時期があります。ご容赦ください。重要・緊急を要する場合はメールにてご連絡いただくよう、お願いいたします。</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'お問い合わせ'
    }
  }
}
</script>
