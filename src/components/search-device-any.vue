<template>
  <div class="list row">
    <div class="col-md-12">
      <div class="input-group mb-3">
        <input v-model="anyParam" class="form-control" placeholder="Lazy search"
               type="text" v-on:input="searchAnyParam"/>
      </div>
    </div>
    <div class="col-md-12" v-if="anyParam">
      <h4>Device List</h4>
      <ul class="list-group">
        <li v-for="device in devices" class="list-group-item">
          <router-link
              :to="{ path: '/workOrder', name: 'deviceWorkOrder', params: { deviceName: device.name }}">
            Client Name:
            {{ device.clientName }}
            <br>
            Counter:
            {{ device.counter }}
            <br>
            Name:
            {{ device.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import ServiceDevice from "@/Services/ServiceDevice";

export default {
  name: "search-device-any",
  data() {
    return {
      devices: [],
      anyParam: null
    };
  },
  computed: {
    token: {
      get() {
        return this.$store.state.token;
      },
      set(newValue) {
        this.$store.commit("updateToken", newValue);
      }
    },
  },
  methods: {
    searchAnyParam() {
      if (this.anyParam == "") {
        this.devices = [];
      } else {
        ServiceDevice.searchDeviceAnyParam(this.anyParam, this.token)
            .then(response => {
              this.devices = response.data;
              console.log(response.data);
            })
            .catch(e => {
              console.log(e);
            });
      }
    }
  },
};

</script>

<style scoped>

</style>