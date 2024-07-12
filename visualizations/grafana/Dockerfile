FROM grafana/grafana:latest

RUN grafana-cli plugins install volkovlabs-echarts-panel
RUN grafana-cli plugins install marcusolsson-static-datasource

USER grafana
WORKDIR /

ENTRYPOINT [ "/run.sh" ]