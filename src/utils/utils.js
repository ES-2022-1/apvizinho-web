export const extractAnnouncementFields = ({
  title,
  description,
  vacancies,
}) => ({
  title,
  description,
  vacancies: vacancies.length,
});

export const extractVacancyOptions = (vacancy) => ({
  Suíte: vacancy.has_bathroom,
  "Garagem inclusa": vacancy.has_garage,
  "Mobília inclusa": vacancy.has_furniture,
  "Internet cabeada": vacancy.has_cable_internet,
  "Quarto compartilhado": vacancy.is_shared_room,
  "Pessoa extrovertida": vacancy.required_extroverted_person,
  "Pessoa organizada": vacancy.required_organized_person,
});

export const extractLocalOptions = (announcement) => ({
  "Proximo à universidade": announcement.is_close_to_university,
  // "Proximo à ponto de ônibus": announcement.,
  "Proximo à supermercado": announcement.is_close_to_supermarket,
  Mobiliado: announcement.has_furniture,
  Internet: announcement.has_internet,
  "Permitido pets": announcement.allow_pet,
  "Permitido eventos": announcement.allow_events,
  // "Permitido fumantes": announcement.,
  "Gás encanando": announcement.has_piped_gas,
});

export const extractUserOptions = (user) => ({
  Nome: user.firstname,
  Sobrenome: user.surname,
  Email: user.email,
  "Data de Nascimento": user.birthdate,
  Descrição: user.bio,
  Senha: user.password,
});

export const vacancyOptions = {
  has_bathroom: "Suíte",
  has_garage: "Garagem inclusa",
  has_furniture: "Mobília inclusa",
  has_cable_internet: "Internet cabeada",
  is_shared_room: "Quarto compartilhado",
  allowed_smoker: "Permitido fumantes",
  required_extroverted_person: "Pessoa extrovertida",
  required_organized_person: "Pessoa organizada",
};

export const localOptions = {
  is_close_to_university: "Proximo à universidade",
  is_close_to_supermarket: "Proximo à supermercado",
  has_furniture: "Mobiliado",
  has_internet: "Internet",
  allow_pet: "Permitido pets",
  allow_events: "Permitido eventos",
  has_piped_gas: "Gás encanando",
};
