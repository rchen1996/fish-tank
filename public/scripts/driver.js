$(() => {

  window.fishtank = new Fishtank('fishtank');             // making it global to make debugging 1% easier.  shhhh.
  window.fishtank.registerSpecies(SwitchFish, GoFish, BiteFish, Shark, Pufferfish);
  var starter = new Starter({
    tank: window.fishtank,     // look, it's Dependency Injection!  Pretend you care!
    position: new Vector(0, 0)
  });

  const seaweed = new Seaweed({
    tank: window.fishtank,
    position: new Vector(-150, 0)
  })

  const seaweed2 = new Seaweed({
    tank: window.fishtank,
    position: new Vector(-300, 0)
  })

  const seaweed3 = new Seaweed({
    tank: window.fishtank,
    position: new Vector(-450, 0)
  })

  const seaweed4 = new Seaweed({
    tank: window.fishtank,
    position: new Vector(150, 0)
  })

  const seaweed5 = new Seaweed({
    tank: window.fishtank,
    position: new Vector(300, 0)
  })

  const seaweed6 = new Seaweed({
    tank: window.fishtank,
    position: new Vector(450, 0)
  })

});



