package at.technikumwien;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.stereotype.Component;
import org.springframework.context.event.EventListener;

@Component
public class DBInitializer {
	@Autowired
	private NewsRepository newsRepository;
		
	@EventListener(ApplicationReadyEvent.class)
	public void handleApplicationReady() {
		newsRepository.saveAll(List.of(
			new News("Hello World!", "Herzlich willkommen am Planeten Erde."),
			new News("News-Portal online!", "Unser neues News-Portal ist online.")
		));
	}
}