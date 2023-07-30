// Função para calcular a idade com base na data de nascimento
function calculateAge(birthDate) {
    const birthDateObj = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birthDateObj.getFullYear();

    const monthDiff = today.getMonth() - birthDateObj.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }

    return age;
  }

  // Função para atualizar a idade na página
  function updateAge() {
    const birthDate = new Date('1978-05-17'); // Data de nascimento (formato: 'YYYY-MM-DD')
    const ageElement = document.getElementById('age');
    const ageValue = calculateAge(birthDate);
    ageElement.querySelector('span').textContent = ageValue;
  }

  // Atualiza a idade inicialmente
  updateAge();