import readline from 'readline';
import ShockAbsorbers from '../src/TuningParts/ShockAbsorbers.mjs';
import Stabilizers from '../src/TuningParts/Stabilizers.mjs';
import Springs from '../src/TuningParts/Springs.mjs';
import CalculationsFormulas from '../src/Calculations/CalculationsFormulas.mjs';
import CalculationsDrift from '../src/Calculations/CalculationsDrift.mjs';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Укажите фронтальную нагрузку вашей машины (Значение в %).\n', frontPayload => {
  console.log(`Фронтальная нагрузка вашей машины равна: ${frontPayload}% \n`);

  const calcDrift = new CalculationsDrift(
    frontPayload / 100,
    CalculationsFormulas.getInstance(),
    new Stabilizers(),
    new Springs(),
    new ShockAbsorbers(),
  );

  console.log(`Пружины. Передние: ${calcDrift.springs[0]}, Задние: ${calcDrift.springs[1]} \n`);
  console.log(`Амортизация. Передние: ${calcDrift.shockAbsorbers[0]}, Задние: ${calcDrift.shockAbsorbers[1]} \n`);
  console.log(`Поперечные стабилизаторы. Передние: ${calcDrift.stabilizers[0]}, Задние: ${calcDrift.stabilizers[1]} \n`);

  rl.close();
});
