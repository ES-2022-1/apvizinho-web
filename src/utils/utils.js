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
  has_bathroom: vacancy.has_bathroom,
  has_garage: vacancy.has_garage,
  has_furniture: vacancy.has_furniture,
  has_cable_internet: vacancy.has_cable_internet,
  is_shared_room: vacancy.is_shared_room,
  required_extroverted_person: vacancy.required_extroverted_person,
  required_organized_person: vacancy.required_organized_person,
  gender: vacancy.gender,
  price: vacancy.price,
});

export const extractLocalOptions = (announcement) => ({
  is_close_to_university: announcement.is_close_to_university,
  is_close_to_supermarket: announcement.is_close_to_supermarket,
  has_furniture: announcement.has_furniture,
  has_internet: announcement.has_internet,
  allow_pet: announcement.allow_pet,
  allow_events: announcement.allow_events,
  has_piped_gas: announcement.has_piped_gas,
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
