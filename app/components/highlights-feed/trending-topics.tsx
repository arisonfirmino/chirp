import Card from "./card";

const TrendingTopics = () => {
  return (
    <Card>
      <h2 className="font-semibold text-blue-700">Assuntos do Momento</h2>

      <ul>
        <li className="border-b border-solid border-gray-400 p-2.5">
          <h3 className="truncate font-semibold">
            <span className="text-blue-700">1 - </span>Futebol
          </h3>
          <small className="text-gray-400">154 publicações</small>
        </li>

        <li className="border-b border-solid border-gray-400 p-2.5">
          <h3 className="truncate font-semibold">
            <span className="text-blue-700">2 - </span>Tecnologia
          </h3>
          <small className="text-gray-400">96 publicações</small>
        </li>

        <li className="border-b border-solid border-gray-400 p-2.5">
          <h3 className="truncate font-semibold">
            <span className="text-blue-700">3 - </span>Música
          </h3>
          <small className="text-gray-400">83 publicações</small>
        </li>

        <li className="border-b border-solid border-gray-400 p-2.5">
          <h3 className="truncate font-semibold">
            <span className="text-blue-700">4 - </span>Filme
          </h3>
          <small className="text-gray-400">78 publicações</small>
        </li>

        <li className="border-b border-solid border-gray-400 p-2.5">
          <h3 className="truncate font-semibold">
            <span className="text-blue-700">5 - </span>Comida
          </h3>
          <small className="text-gray-400">54 publicações</small>
        </li>
      </ul>
    </Card>
  );
};

export default TrendingTopics;
