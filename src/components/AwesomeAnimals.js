export default function AwesomeAnimals() {
  return (
    <div>
      <h1> AWESOME ANIMALS</h1>
      <ul>
        {["Chicken", "Sloth", "Porpcupine", "Killer Whale", "Velociraptor"].map(
          (animal, index) => {
            return (
              <li key={index}>
                AWSOME LEVEL - {index + 1} - :{animal}
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
}
//  <ul>
//    <li>Awesomeness level 1: Chicken</li>
//    <li>Awesomeness level 2: Sloth</li>
//    <li>Awesomeness level 3: Porcupine</li>
//    <li>Awesomeness level 4: Killer whale</li>
//    <li>Awesomeness level 5: Velociraptor</li>
//  </ul>;
