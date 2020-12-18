import {
  Container,
  ItemGrid,
  Date,
  Time,
  Image,
  Duration,
  Source,
  Name,
  Subject,
  TeacherData,
} from "./style";
export default ({ data }) => {
  return (
    <Container>
      <ItemGrid>
        <Date>{data.date}</Date>
        <Time>{data.time}</Time>
        <Duration>{data.duration}</Duration>
        <TeacherData>
          <Image src={data.img} />
          <Name>{data.name}</Name>
        </TeacherData>
        <Source>{data.link}</Source>
        <Subject>{data.subject}</Subject>
      </ItemGrid>
    </Container>
  );
};
