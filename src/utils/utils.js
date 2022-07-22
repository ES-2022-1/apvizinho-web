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
