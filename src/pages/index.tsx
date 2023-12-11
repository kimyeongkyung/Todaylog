import What from "./where";
import styled from "styled-components";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import FloatButton from "@/components/Button/FloatButton";
import Navigation from "@/components/Navigation";

const Home = () => {
  const { pathname, push } = useRouter();

  return <>{pathname === "/" && <What />}</>;
};

export default Home;
