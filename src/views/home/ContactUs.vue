<template>
  <v-sheet class="bg-deep-purple pa-12" rounded>
    <v-card class="mx-auto px-6 py-8" max-width="954">
      <v-form v-model="form" @submit.prevent="onSubmit">
        <v-row>
          <v-col cols="6" sm="6">
            <v-text-field
              v-model="name"
              :readonly="loading"
              :rules="[required]"
              class="mb-2"
              clearable
              label="Full Name"
            ></v-text-field>
          </v-col>
          <v-col cols="6" sm="6">
            <v-text-field
              v-model="email"
              :readonly="loading"
              :rules="[required]"
              class="mb-2"
              clearable
              label="Email"
            ></v-text-field>
           
          </v-col>
          <v-col cols="12" sm="12">
            <v-text-field
              v-model="phone"
              :readonly="loading"
              :rules="[required]"
              class="mb-2"
              clearable
              label="Phone Number"
            ></v-text-field></v-col>
          <v-col cols="12" sm="12">
           <v-textarea label="Enter Your Message"></v-textarea></v-col>
        </v-row>
        <br />

        <v-btn
          :disabled="!form"
          :loading="loading"
          block
          color="success"
          size="large"
          type="submit"
          variant="elevated"
        >
          Submit
        </v-btn>
      </v-form>
    </v-card>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    form: false,
    email: null,
    password: null,
    loading: false,
  }),

  methods: {
    onSubmit() {
      if (!this.form) return;

      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
    required(v) {
      return !!v || "Field is required";
    },
  },
};
</script>
