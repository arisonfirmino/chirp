import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const formatDate = (date: Date) => {
  return format(date, "dd MMM, yyyy 'às' hh:mm a", { locale: ptBR });
};
