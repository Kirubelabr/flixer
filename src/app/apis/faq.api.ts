import { httpService } from "../shared/services/http.service";
import { faqEndpoint } from "./faq.endpoints";

export const fetchFaq = () => {
    return httpService.get(`${faqEndpoint.getFaq}`).then((response) => {
        return response.data;
    });
};
