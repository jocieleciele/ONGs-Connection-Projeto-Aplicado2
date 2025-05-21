AOS.init({
  once: true,
  duration: 800,
  easing: 'ease-out',
});

document.querySelector('.botoes-cadastro').addEventListener('click', (e) => {
  const button = e.target.closest('.btn[data-form]');
  if (!button) return;

  const formId = button.dataset.form;
  const form = document.getElementById(`form-${formId}`);
  const isVisible = !form.classList.contains('escondido');

  if (isVisible) {
    form.classList.add('escondido');
    form.setAttribute('aria-hidden', 'true');
  } else {
    document.querySelectorAll('.formulario').forEach((f) => {
      f.classList.add('escondido');
      f.setAttribute('aria-hidden', 'true');
    });
    form.classList.remove('escondido');
    form.setAttribute('aria-hidden', 'false');
    form.scrollIntoView({ behavior: 'smooth' });
  }
});

async function populateProjects() {
  const projectSelect = document.getElementById('vol-projeto');
  try {
    const response = await fetch('/api/projetos?status=Em andamento');
    const projects = await response.json();
    projectSelect.innerHTML = '<option value="">Selecione um Projeto</option>';
    projects.forEach((project) => {
      const option = document.createElement('option');
      option.value = project.id_projeto;
      option.textContent = project.nome;
      projectSelect.appendChild(option);
    });
  } catch (error) {
    console.error('Erro ao carregar projetos:', error);
    projectSelect.innerHTML = '<option value="">Erro ao carregar projetos</option>';
  }
}

document.querySelector('.btn[data-form="voluntario"]').addEventListener('click', () => {
  const volForm = document.getElementById('form-voluntario');
  if (!volForm.classList.contains('escondido')) {
    populateProjects();
  }
});

document.querySelectorAll('.formulario form').forEach((form) => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formId = form.id;
    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    const endpoints = {
      'doador-form': '/api/doadores',
      'instituicao-form': '/api/ongs',
      'voluntario-form': '/api/voluntariado',
    };

    try {
      const response = await fetch(endpoints[formId], {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Erro na submissão do formulário');

      alert('Formulário enviado com sucesso!');
      form.reset();
      form.parentElement.classList.add('escondido');
    } catch (error) {
      console.error('Erro:', error);
      alert('Ocorreu um erro ao enviar o formulário. Tente novamente.');
    } finally {
      submitButton.disabled = false;
    }
  });
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('.top');
  header.classList.toggle('sticky', window.scrollY > 0);
});

document.querySelectorAll('input[required], textarea[required], select[required]').forEach((input) => {
  input.addEventListener('input', () => {
    const errorSpan = document.getElementById(`${input.id}-error`);
    if (errorSpan) {
      errorSpan.textContent = input.validity.valid ? '' : 'Este campo é obrigatório';
    }
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});