<template>
  <div style="padding: 6px; line-height: 4">
    <v-btn
      style="width: 100%"
      color="primary"
      height="40"
      v-for="text in btn_list"
      :key="text"
    >
      <a
        :href="text.url"
        :target="text.target"
        style="color: aliceblue; text-decoration: none; font-size: 12px"
      >
        {{ text.content }}
      </a>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    btn_list: String,
  },
};
</script>

<style></style>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Diam volutpat commodo sed egestas.
Erat nam at lectus urna. Phasellus vestibulum lorem sed risus ultricies.
Molestie nunc non blandit massa enim nec. Vestibulum mattis ullamcorper velit
sed ullamcorper morbi. Commodo ullamcorper a lacus vestibulum sed arcu non.
Justo laoreet sit amet cursus sit amet dictum. Augue eget arcu dictum varius.
Nec feugiat in fermentum posuere urna nec. Adipiscing elit duis tristique
sollicitudin nibh sit amet commodo nulla. Risus feugiat in ante metus dictum at
tempor commodo. Id venenatis a condimentum vitae sapien. Tortor condimentum
lacinia quis vel eros donec ac. Tellus cras adipiscing enim eu turpis egestas
pretium aenean pharetra. Id eu nisl nunc mi ipsum faucibus. Malesuada
pellentesque elit eget gravida cum. Posuere lorem ipsum dolor sit amet
consectetur adipiscing. Erat velit scelerisque in dictum non consectetur a.
Gravida quis blandit turpis cursus in hac. Pulvinar neque laoreet suspendisse
interdum consectetur libero id faucibus. Ut venenatis tellus in metus vulputate
eu scelerisque. Tortor id aliquet lectus proin nibh. Phasellus vestibulum lorem
sed risus ultricies. Mi tempus imperdiet nulla malesuada pellentesque elit.
Egestas maecenas pharetra convallis posuere morbi leo urna molestie at. Et
malesuada fames ac turpis egestas maecenas. Maecenas ultricies mi eget mauris
pharetra et. Pellentesque elit ullamcorper dignissim cras. Nulla facilisi morbi
tempus iaculis. Justo laoreet sit amet cursus. Leo a diam sollicitudin tempor id
eu. Pellentesque dignissim enim sit amet venenatis urna cursus eget nunc.
Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Rhoncus est
pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Nam libero
justo laoreet sit. Suspendisse in est ante in nibh. Egestas purus viverra
accumsan in nisl nisi scelerisque. Ligula ullamcorper malesuada proin libero
nunc. Mauris rhoncus aenean vel elit. Amet risus nullam eget felis eget. Semper
eget duis at tellus at urna. Blandit massa enim nec dui nunc. Vitae auctor eu
augue ut lectus arcu. Egestas integer eget aliquet nibh. Aliquam id diam
maecenas ultricies mi. Aliquam eleifend mi in nulla posuere sollicitudin. Ut
aliquam purus sit amet luctus venenatis. Consectetur libero id faucibus nisl.
Sit amet commodo nulla facilisi nullam vehicula ipsum a. Etiam tempor orci eu
lobortis. Cursus eget nunc scelerisque viverra. Aliquam faucibus purus in massa
tempor nec feugiat nisl. Aliquam faucibus purus in massa. Odio tempor orci
dapibus ultrices in iaculis nunc sed. Cras semper auctor neque vitae tempus quam
pellentesque. Tempus egestas sed sed risus. Netus et malesuada fames ac. Amet
cursus sit amet dictum sit amet. Bibendum enim facilisis gravida neque. Lectus
vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare.
Elementum pulvinar etiam non quam. Felis eget nunc lobortis mattis aliquam
faucibus. In fermentum et sollicitudin ac orci phasellus egestas tellus. In
pellentesque massa placerat duis ultricies. Diam maecenas sed enim ut sem
viverra. Viverra mauris in aliquam sem fringilla ut morbi tincidunt. Maecenas
ultricies mi eget mauris pharetra et ultrices neque ornare. Gravida in fermentum
et sollicitudin ac orci phasellus egestas tellus. Quis eleifend quam adipiscing
vitae proin sagittis nisl rhoncus mattis. Gravida neque convallis a cras semper
auctor. Natoque penatibus et magnis dis parturient montes nascetur. Faucibus
nisl tincidunt eget nullam non nisi. Malesuada pellentesque elit eget gravida
cum.
