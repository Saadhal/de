package myapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import myapp.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByLogin(String login);
    User findByEmail(String email);
}
