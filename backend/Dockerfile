FROM arm64v8/ubuntu:latest

ARG USERNAME=backend
ENV HOME "/home/${USERNAME}"

RUN apt-get -q update && \
    apt-get -qy install \
        python-is-python3 \
        python-dev-is-python3\
        python3-pip \
        gcc \
        make \
        curl \
        git

RUN adduser --home ${HOME} --shell /bin/bash ${USERNAME}

RUN mkdir /backend
COPY . ./
# Install Rpi.GPIO
RUN pip install -r requirements.txt

# Download the SPI-Py project source files
RUN git clone https://github.com/lthiery/SPI-Py.git

# Install SPI-Py
RUN cd SPI-Py && python setup.py install

# Directory where python app will run
WORKDIR ${HOME}
USER ${USERNAME}
EXPOSE 8000
CMD ["python", "main.py"]
