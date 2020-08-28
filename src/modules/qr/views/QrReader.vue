<template>
  <section class="hero is-fullheight">
    <div class="hero-head">
      <b-navbar>
        <template slot="brand">
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <b-icon icon="arrow-left" />
          </b-navbar-item>
        </template>
      </b-navbar>
    </div>
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="heading is-size-4">Scan QR</h1>

        <qrcode-stream
          @decode="onDecode"
          @init="onInit"
          style="width: 300px; height: 300px; margin: auto"
        />
        <p class="error">{{ error }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { QrcodeStream } from "vue-qrcode-reader";
export default {
  name: "QrReader",
  components: { QrcodeStream },
  data() {
    return {
      result: "",
      error: ""
    };
  },
  mounted() {
    navigator.permissions.query({ name: "camera" }).catch(error => {
      alert("Please allow camera permission status:", error);
    });
  },
  methods: {
    onDecode(result) {
      this.$router.push(`/menu/${result}`);
      this.result = result;
    },
    async onInit(promise) {
      try {
        await promise;
      } catch (error) {
        if (error.name === "NotAllowedError") {
          this.error = "ERROR: you need to grant camera access permisson";
        } else if (error.name === "NotFoundError") {
          this.error = "ERROR: no camera on this device";
        } else if (error.name === "NotSupportedError") {
          this.error = "ERROR: secure context required (HTTPS, localhost)";
        } else if (error.name === "NotReadableError") {
          this.error = "ERROR: is the camera already in use?";
        } else if (error.name === "OverconstrainedError") {
          this.error = "ERROR: installed cameras are not suitable";
        } else if (error.name === "StreamApiNotSupportedError") {
          this.error = "ERROR: Stream API is not supported in this browser";
        }
      }
    }
  }
};
</script>

<style scoped>
.error {
  font-weight: bold;
  color: red;
}
</style>
