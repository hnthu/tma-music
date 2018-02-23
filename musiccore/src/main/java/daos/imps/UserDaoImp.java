package daos.imps;

import daos.UserDao;
import models.User;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.Set;

@Repository
@Transactional
public class UserDaoImp implements UserDao {

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public User get(String userName) {
        return sessionFactory.getCurrentSession().get(User.class, userName);
    }

    @Override
    public Set<User> search(String searchString) {
        return null;
    }

    @Override
    public Set<User> getAll() {
        return new HashSet<>(
                    sessionFactory.getCurrentSession().createQuery(
                    sessionFactory.getCurrentSession().getCriteriaBuilder().createQuery(User.class)
            ).getResultList()
        );
    }

    @Override
    public void add(User newUser) {

    }

    @Override
    public void update(User modifiedUser) {

    }

    @Override
    public void delete(String userName) {

    }
}
