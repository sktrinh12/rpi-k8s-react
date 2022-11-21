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

RUN apt-get -yq install sudo && adduser --home ${HOME} --shell /bin/bash ${USERNAME} \
    && echo "${USERNAME}  ALL=(ALL) NOPASSWD:ALL" | tee "/etc/sudoers.d/${USERNAME}"

WORKDIR ${HOME}
COPY . ./
# Install Rpi.GPIO
RUN pip install -r app/requirements.txt

# Download the SPI-Py project source files
RUN git clone https://github.com/lthiery/SPI-Py.git

# Install SPI-Py
RUN cd SPI-Py && python setup.py install

# Directory where python app will run
USER ${USERNAME}
EXPOSE 8000
CMD ["python", "main.py"]
