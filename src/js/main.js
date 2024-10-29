const scores = {
    'Industrial': 0,
    'Civil': 0,
    'Agrícola': 0,
    'Sistemas': 0,
    'Eléctrica': 0,
    'Electrónica': 0,
    'Mecánica': 0,
    'Mecatrónica': 0
  };

  const selections = {};

  function selectOption(element, group, career) {
    const options = document.querySelectorAll('.option' + group); 
    options.forEach(option => option.classList.remove('selected')); 
    element.classList.add('selected'); 
    selections[group] = career; 
  }

  function showResult() {
    for (let career in scores) {
      scores[career] = 0;
    }

    for (let question in selections) {
      const career = selections[question];
      scores[career]++;
    }

    const highestScore = Math.max(...Object.values(scores));
    const recommendedCareer = Object.keys(scores).find(career => scores[career] === highestScore);

    const careerDescriptions = {
      'Industrial': 'La Ingeniería Industrial optimiza procesos y mejora la eficiencia en empresas e industrias.',
      'Civil': 'La Ingeniería Civil se enfoca en la infraestructura, construyendo carreteras, puentes, edificios y más.',
      'Agrícola': 'La Ingeniería Agrícola trabaja en el desarrollo de tecnologías sostenibles para la agricultura, buscando el equilibrio entre productividad y medio ambiente.',
      'Sistemas': 'La Ingeniería de Sistemas desarrolla soluciones informáticas, desde software hasta bases de datos, para resolver problemas complejos.',
      'Eléctrica': 'La Ingeniería Eléctrica estudia y aplica la energía eléctrica en diversos campos, desde redes de energía hasta energías renovables.',
      'Electrónica': 'La Ingeniería Electrónica se centra en el diseño y aplicación de dispositivos electrónicos, como sistemas de comunicación y control.',
      'Mecánica': 'La Ingeniería Mecánica diseña y mejora maquinaria y sistemas mecánicos, con aplicaciones en múltiples industrias.',
      'Mecatrónica': 'La Ingeniería Mecatrónica integra mecánica, electrónica y computación para crear sistemas automatizados y robóticos.',
      'Quimica': 'La Ingeniería Química desarrolla procesos sostenibles y nuevos materiales para industrias como la farmacéutica y alimentaria.'
      
    };

    if (recommendedCareer) {
      document.getElementById('result-title').innerText = `Tu Carrera Recomendada: ${recommendedCareer}`;
      document.getElementById('result-description').innerText = careerDescriptions[recommendedCareer];
      document.getElementById('result').style.display = 'block';
    } else {
      alert("Por favor, responde todas las preguntas.");
    }
  }