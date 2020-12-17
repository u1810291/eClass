import { Route, Redirect } from "react-router-dom";
import { Container, Content } from "./style";
import { childRoutes } from "../../routes/sidebar-elemets";
import Navbar from "../Navbar";

export default () => (
  <Container>
    <Navbar />
    <Content>
      {childRoutes.map(({ path, component, children }, index) =>
        children.length ? (
          <div key={`${index + 1}`}>
            {children.map((child, childIndex) => (
              <Route
                key={`${childIndex + 1}`}
                exact={child.exact}
                path={`${path}${child.path}${child.params || ""}`}
                component={child.component}
              />
            ))}
            {children.filter(({ hidden }) => !hidden).length ? (
              <Route exact path={path}>
                <Redirect to={`${path}${children[0].path}`} />
              </Route>
            ) : (
              <Route
                exact
                key={`${index + 1}`}
                path={path}
                component={component}
              />
            )}
          </div>
        ) : (
          <Route key={`${index + 1}`} path={path} component={component} />
        )
      )}
      <Redirect from="*" to="/profile" />
    </Content>
  </Container>
);
