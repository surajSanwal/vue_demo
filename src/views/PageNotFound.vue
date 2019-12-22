<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col></b-col>
        <b-col>
          <b-row>
            <b-col></b-col>
            <b-col>
              <b-jumbotron
                bg-variant="info"
                text-variant="white"
                fluid
                style="margin-top:100px"
              >
                <template v-slot:header>OOPS!</template>

                <template v-slot:lead>
                  Page you are looking for not found.
                </template>

                <hr class="my-4" />
              </b-jumbotron>
            </b-col>
            <b-col></b-col>
          </b-row>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>
