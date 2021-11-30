package at.technikumwien;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.java.Log;

@RestController
@RequestMapping("/resources/news")
@CrossOrigin
@Log
public class NewsResource {
    @Autowired
    private NewsRepository newsRepository;

    @PostMapping
    public ResponseEntity<?> create(@RequestBody News news) {
        log.info("create() >> news=" + news);
        
        news.setId(null);   // better safe than sorry
        news = newsRepository.save(news);
        
        var location = WebMvcLinkBuilder.linkTo(
		    WebMvcLinkBuilder.methodOn(getClass()).retrieve(news.getId())
		).toUri();
		
        return ResponseEntity.created(location).build();
	}
    
    @GetMapping("/{id}")
    public News retrieve(@PathVariable long id) {
        log.info("retrieve() >> id=" + id);
        
        return newsRepository.findById(id)
            .orElseThrow(
                () -> new EmptyResultDataAccessException("can't find news with id " + id, 1)
            );
    }

    @PutMapping("/{id}")
    public void update(
    	@PathVariable long id,
    	@RequestBody News news
    ) {
        log.info("update() >> id=" + id + ", news=" + news);
        
        news.setId(id); // better safe than sorry
        newsRepository.save(news);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable long id) {
        log.info("delete() >> id=" + id);
        
        newsRepository.deleteById(id);   // throws EmptyResultDataAccessException if news could not be found
    }

    @GetMapping
    public List<News> retrieveAll() {
        log.info("retrieveAll()");
        
        return newsRepository.findAll();
    }
}